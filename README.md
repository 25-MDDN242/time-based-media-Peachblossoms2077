[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/M3ipj5sV)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18378491&assignment_repo_type=AssignmentRepo)
## MDDN 242 Project 1: Time-based Media  

### README

### First Day Commit (25/02)
I'm very not confident in my ability to do P5 as I was really struggling next year. I was spending a lot of time thinking about a design that is both functional, unique and somewhat straightforward to create in P5. 

I read through some of the articles and designs on the Nuku modules and some of them are really interesting, I wonder if I could maybe replicate or create a variations of one of those designs on P5. 

I looked through some of the video games I play that has a night and day system and consequently, a clock system. Most of them have unique designs to tell not only the time, but also phases and special periods within the game, if possible I would also like to incorporate this within my clock.

I've also tried looking at my design a little differently and try to see it as a time of day or time period visualizer instead of a just merely telling a number.

For the in-class discussion sketch, I ignored all my worries about my capabilities in P5 and just tried something that was on my mind. The sketch is very much inspired by the default lockscreen wallpapers of modern Apple Iphones. Will check with Pheobe to see if it's the right direction, if if it's even possible for me :/

### Sketch Updated Commit (26/02)

### Non-operating Maeda Clock (In-class) Commit (27/02)

### Working (Simplified) Maeda Clock Commit (28/02)
I decided to do the digital clock made up of clockfaces one, #8. Instead of clockfaces though, it just has white circles but hey, it works. The exercise was good practice for my future projects and assignments. Thanks Phoebe.

### In-class Commit (04/03)
I didn't get to do much, my project is kinda heavily image-based so I just started work on the day and night cycle of the clock. I tried to implement (steal code) a color gradient into the sky for a more natural look but this is strangely complicated once I tried to connect color changes to obj.hours. Very confused.

I'll try to do more at home.

The way that I was trying to change colors for the day and night cycle was to just always render night time, then render day time on top with transitions made by gradually changing the opacity of each color. This system's upside is that the transition is very smooth because the opacity changes were occuring every frame. However, it's extremely buggy, I couldn't change the day and night time, I couldn't modify anything or else the whole thing would break immediately. I will try to ask Phoebe about it in class.

### In-class Commit (06/03)
I scratched my old system of changing the opacity for the day and night cycle and switched to a colorlerp system (thanks for the advice, Pheobe) to change color during transitional periods of the day instead. It does (somewhat) work but since color change is now tied to obj.hours, it's choppy and not smooth. 

Added Sun and Moon but their movement are also tied to obj.hours and aren't the smoothest.
I thought about just having the sun and moon going from left to right like traditional clocks, but I felt it's much more interesting to have the angle of the planets to be from the middle instead. Personally, it gives the sun and the moon much more depth and size instead of the usual dot in the sky. I like it.

### Working Day Night System and Sun and Moon Movement Commit (14/03)
I fully fixed the Day Night System and added movement tied to obj.minutes along with obj.hours. This way, transitions between colors are much smoother than before. I implemented the same thing with the Sun and Moon so that their movement aren't purely tied to obj.hours. The moon rising at 12am and exits at 5am doesn't really make sense either so I managed to get the moon to rise at 9pm and leaves at 4am.

The Clock's mechanism is basically complete, excluding the assets I still need to make and import and the alarm system.

Small update: I also added obj.seconds tie in with the day night and planet system, what could hurt?
UPDATE README, LAZY AHH

### In Class Commit (20/03) (kinda working alarm)
I added a basic alarm system with a moving blue and red ring around the Earth, I liked it but Phoebe mentioned it could be taken further. I thought about having a timer of some kind implemented on the screen but I couldn't think of anything at the top of my head. I decided to just use a type of loading ring around the earth that would gradually fill up as the timer slowly runs out. This is much easier said than done however and I couldn't get the ring to function the way I want it. The ring is supposed to fill up faster the shorter the alarm you set, but I could only get it to be filled up to a certain point already once you set the alarm, I guess it still works. For the alarm itself, I went for something simple but, for me, very effective. I was inspired by DEFCON (the video game) where you supposedly control a country within a world on the verge of nuclear warfare, one which definitely will happen no matter which choice you make in-game. I took this idea and repurposed the red ring to be a pulsing red screen, one that looks exactly like in the game, and implement a sound system with a alarm sound for imminent nuclear threat. I'm quite happy with how it turned out! Though depressing it may be, I think it works great as an alarm.

### Finished sprites, comet and star system Commit (25/03)
I finished working on and importing the planet's asset into the clock, half-way through the design process I thought the vector minimalistic art style would look great and be easy to do (something similar to kurzgesagt's videos). I also made an extra comet sprite that I implemented to fly across the screen every minute. I also implement a star system (with AI's help) where a set number of stars flash and decay overtime, every second at night. I was really happy with this addition as I felt a lot of the negative space before on the canvas is now filled out with something fairly interesting and satisfying to look at. I like this change so much that I struggle to think of anything that could match it during daytime (because the stars only appear at night). I'm considering scrapping the whole day-night system that I have worked so hard on and I don't know how I feel about it.

### Final Clock Commit (27/03)
After some feedback with Phoebe, I was faced with a hard decision of either keeping an incomplete clock or scrapping the day night system entirely to benefit the readability and aesthetic of the clock. After a long while, I realized I am too stubborn to give up something I worked on for that long. I made a new sprite for a small satellite and wrote an extra bit of code to have it hover around the earth 24/7, with beeping to sync with obj.seconds, and with that my clock was complete. I also tried to modify the appearance of the moon a bit to follow Phoebe's feedback but there were some issues importing the assets to Vscode (also the fact that I kinda like the old design more). Now both day and night periods of my clock has an element of seconds, minutes and hours to convey different time of day. I am very proud of what I've made, considering the amount of time put into it. Can't wait to start on the next project. -_-

PS. Please take the time to cycle through your PC's system time to see how it looks during the day and night. Thank you!

### Final Final(After hand-in) Clock Commit (27/03)

I am fine with this not being graded, but I'm just pissed off at all the negative space in the sky of the clock during day time, I added some simple sprites for floating clouds and made them oscillate left and right to make the clock less. Damn. Boring. Screw realism, screw the fact that I have already added clouds to the Earth and these "floating clouds" (dumb name, all clouds float) are redundant. Screw the fact that this part of the README will probably never be read and this part of the project will never be graded. I AM DONE! Finally the sky will have some thing to look at instead of NOTHINGGGG! 

Oh yeah and I fixed some formatting issues too.

### Inspirations
At the ideation stage, the angle and basic idea for the clock came from the Iphone default wallpaper as well as many different clock system in video games. 

While making the sprites for the planets, my original idea was to do scans of the earth, moon and sun and import them into the clock to make a somewhat realistic depiction of earth from space. I realize early on that this isn't allowed, along with the fact that making something like that by manually would take MONTHS. I had to decide on an artstyle for my planets and Kurzgesagt came to mind.

later on, I took inspiration from the video game DEFCON to implement my alarm as well as certain themes about space, nothing but a little nihilism to make a good clock. The satellite was an idea that came about early on but wasn't materialized until the final stages of the project, I repurposed the satellite to be an element that could also show seconds during daytime so I can keep the day night system without compromising the functionality of the clock.

### Overcoming problems
Throughout the project, there were numerous occasions where something spring up and would block the progress of the entire project. For instance, the day night cycle was broken for a long time while I struggle to fix it, I had to go through many iterations of solutions before I find one that worked. Even now, I am not satisfied with how my alarm system turned out, however aesthetically pleasing it may be. I was never good with coding in the first place so implementing and troubleshooting any feature was a very slow and arduous process, the food poisoning halfway through the project certainly didn't help either. The debug mode for the clock also isn't great as it's extremely limiting for testing as well as showcasing how the clock works. Personally, I think having a fast forward or reverse option would be a good idea in the future if Pheobe wants to run this exercise again in future classes. 

Admittedly, I have to give a lot of my thanks to ChatGPT. I won't pretend that I didn't use generated code or that I even understood all of it, but some of my system was only possible thanks to the help of AI. Though most of my work was written by hand, half of the star system was written by ChatGPT using arrays (that I somewhat understood), I only implemented it within the day night system. In other cases, ChatGPT was a huge help with the math, as with the loading bar for the alarm system and the comet animation. I also have to give credit to P5js.org for letting me steal the gradient system as well as Dave, the random dude on the P5js discord that helped me finish the code for the alarm system that GPT spat out. Whoever he is, I hope a pile of cash as big as my student loan shows up on his doorstep.


Finally updated README for once, go me.


And I'm naming my clock: "Hello World!", cuz it's the world... and it's from code... get it? heh.






