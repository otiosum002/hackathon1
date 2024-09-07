from django.shortcuts import render, redirect
from .models import Room, Message
from django.http import HttpResponse, JsonResponse
from googletrans import Translator

x={}

def home(request):
    return render(request, 'home.html')


def room(request, room):
    username = request.GET.get('username') # henry
    room_details = Room.objects.get(name=room)

    return render(request, 'room.html', {

        'username': username,
        'room': room,
        'room_details': room_details,
    })


def checkview(request):
    room = request.POST['room_name']
    username = request.POST['username']
    global lang
    lang=request.POST['language']
    print('----',room)
    print('-----',username)
    print('--',lang)
    if room not in x.keys():
        x.update({room:{username:lang}})
    else:
        x[room].update({username:lang})
    print(x)

    if Room.objects.filter(name=room).exists():
        return redirect('/'+room+'/?username='+username)
    else:
        new_room = Room.objects.create(name=room)
        new_room.save()
        return redirect('/'+room+'/?username='+username)

def send(request):
    message = request.POST['message']
    username = request.POST['username']
    room_id = request.POST['room_id']
    room = request.POST['room']
    translator = Translator()
    if room in x.keys():
        m=x[room]
        print(m)
        if username in m.keys():
            k=x[room][username]
            print('****FROM SEND',message)
            print('****user',username)
            print('****room',room)
            print('****RANGO',k)
        else:
            print('NOT AVAILABLE')
    else:
        print('NA2')
    a=translator.translate(message,src='auto',dest=k).text
    
    new_message = Message.objects.create(value=a, user=username, room=room_id)
    new_message.save()
    # return HttpResponse("Hi, Message Sent Successfully!!")


def getMessages(request,  room):
    room_details = Room.objects.get(name=room)
    messages = Message.objects.filter(room=room_details.id)
    return JsonResponse({"messages": list(messages.values())})
