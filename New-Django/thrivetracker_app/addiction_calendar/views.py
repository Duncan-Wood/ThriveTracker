from django.shortcuts import render, redirect
import calendar
from calendar import HTMLCalendar
from datetime import datetime
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth.models import User
from .models import Event, Venue
from .forms import VenueForm, EventForm, EventFormAdmin
import csv

# for the PDF functionality
from django.http import FileResponse
import io
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch
from reportlab.lib.pagesizes import letter

# Import pagination tools
from django.core.paginator import Paginator




# generate a pdf file Venue list
def venue_pdf(request):
    # create Bytestream buffer
    buf = io.BytesIO()
    # create a canvas
    c = canvas.Canvas(buf, pagesize=letter, bottomup=0)
    # create a text object
    textob = c.beginText()
    textob.setTextOrigin(inch, inch)
    textob.setFont("Helvetica", 14)
    # designate the model
    venues = Venue.objects.all()
    #create blank list
    lines = []
    # loop through and output
    for venue in venues:
        lines.append(venue.name)
        lines.append(venue.address)
        lines.append(venue.zip_code)
        lines.append(venue.phone)
        lines.append(venue.web)
        lines.append(venue.email_address)
        lines.append(" ")
    for line in lines:
        textob.textLine(line)
    # finish up
    c.drawText(textob)
    c.showPage()
    c.save()
    buf.seek(0)
    #return the pdf
    return FileResponse(buf, as_attachment=True, filename='venues.pdf')


#generate a csv file venue list
def venue_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attatchment; filename=venues.csv'
    # Create a csv writer
    writer = csv.writer(response)
    # designate the model
    venues = Venue.objects.all()
    # Add column headings to the csv
    writer.writerow(['Venue Name', 'Address', 'Zip Code', 'Phone', 'Web Address', 'Email'])
    # loop through and output
    for venue in venues:
        writer.writerow([venue.name, venue.address, venue.zip_code, venue.phone, venue.web, venue.email_address])
    return response

#generate a text file venue list
def venue_text(request):
    response = HttpResponse(content_type='text/plain')
    response['Content-Disposition'] = 'attatchment; filename=venues.txt'
    # designate the model
    venues = Venue.objects.all()
    #create blank list
    lines = []
    # loop through and output
    for venue in venues:
        lines.append(f'{venue.name}\n{venue.address}\n{venue.zip_code}\n{venue.phone}\n{venue.web}\n{venue.email_address}\n\n')
    # # write to text file
    response.writelines(lines)
    return response

def delete_venue(request, venue_id):
    venue = Venue.objects.get(pk=venue_id)
    venue.delete()
    return redirect('list-venues')

def delete_event(request, event_id):
    event = Event.objects.get(pk=event_id)
    event.delete()
    return redirect('events-list')

def add_event(request):
    submitted = request.GET.get('submitted', False)

    if request.method == 'POST':
        if request.user.is_superuser:
            form = EventFormAdmin(request.POST)
            if form.is_valid():
                form.save()
                return HttpResponseRedirect('/add_event?submitted=True')
        else:
            form = EventForm(request.POST)
            if form.is_valid():
                event = form.save(commit=False)
                event.manager = request.user
                event.save()
                return HttpResponseRedirect('/add_event?submitted=True')
            else:
                submitted = True 
    else:
        # just going to the page, not submitting
        if request.user.is_superuser:
            form = EventFormAdmin()
        else:
            form = EventForm()

    context = {'form': form, 'submitted': submitted}
    return render(request, 'addiction_events/add_event.html', context)

def update_event(request, event_id):
    event = Event.objects.get(pk=event_id)
    if request.user.is_superuser:
        form = EventFormAdmin(request.POST or None, instance=event)
    else:
        form = EventForm(request.POST or None, instance=event)
    if form.is_valid():
        form.save()
        return redirect('events-list')
    return render(request, 'addiction_events/update_event.html',
        {'event': event, 'form': form})

def update_venue(request, venue_id):
    venue = Venue.objects.get(pk=venue_id)
    form = VenueForm(request.POST or None, instance=venue)
    if form.is_valid():
        form.save()
        return redirect('list-venues')
    return render(request, 'addiction_events/update_venue.html',
        {'venue': venue, 'form': form})


def search_venues(request):
    if request.method == "POST":
        searched = request.POST['searched']
        venues = Venue.objects.filter(name__contains=searched)
        return render(request, 'addiction_events/search_venues.html',
            {'searched': searched, 'venues': venues})
    else:
        return render(request, 'addiction_events/search_venues.html',
        {})

def show_venue(request, venue_id):
    venue = Venue.objects.get(pk=venue_id)
    venue_owner = User.objects.get(pk=venue.owner)
    return render(request, 'addiction_events/show_venue.html',
        {'venue': venue, 'venue_owner': venue_owner})

def list_venues(request):
    # venue_list = Venue.objects.all().order_by('?')
    venue_list = Venue.objects.all()

    # add pagination
    p = Paginator(Venue.objects.all(), 3)
    page = request.GET.get('page')
    venues = p.get_page(page)
    nums = "a" * venues.paginator.num_pages # multiply by a to get an iterable number of pages

    return render(request, 'addiction_events/venues.html',
        {'venue_list': venue_list, 'venues': venues, 'nums': nums})

def add_venue(request):
    submitted = request.GET.get('submitted', False)

    if request.method == 'POST':
        form = VenueForm(request.POST)
        if form.is_valid():
            venue = form.save(commit=False)
            venue.owner = request.user.id
            venue.save()
            # form.save()
            return HttpResponseRedirect('/add_venue?submitted=True')
        else:
            submitted = True 
    else:
        form = VenueForm()

    context = {'form': form, 'submitted': submitted}
    return render(request, 'addiction_events/add_venue.html', context)

def all_events(request):
    events_list = Event.objects.all().order_by('event_date', 'name')
    return render(request, 'addiction_events/events_list.html',
            {'events_list': events_list})

def home(request, year=datetime.now().year, month=datetime.now().strftime('%B')):
    # the {} is called a context dictionary
    # it allows us to pass from the front end to the back end
    # and vice versa
    name = "Addiction Calendar"
    # convert month name to number
    month = month.capitalize()
    month_number = list(calendar.month_name).index(month)
    month_number = int(month_number)

    #create a calendar
    cal = HTMLCalendar().formatmonth(year, month_number)

    # get current year
    now = datetime.now()
    current_year = now.year

    # get current time
    current_time = now.strftime("%I:%M %p")

    return render(request, 'addiction_events/home.html', {
        'name': name,
        'year': year,
        'month': month,
        'month_number': month_number,
        'cal': cal,
        'current_year': current_year,
        'current_time': current_time,
        })