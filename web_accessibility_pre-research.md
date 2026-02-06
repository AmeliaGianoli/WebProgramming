# Web Accessibility Pre-Research Worksheet

## Part 1: Understanding the Landscape

**1. What does "web accessibility" mean to you?** Write your initial definition before looking anything up.

Accessibility to me means that anyone can utilize the web page, regardless of physical limitations. 

**2. Who do you think benefits from accessible websites?** List as many different groups of people as you can imagine. 

Everyone benefits in some way. Obviously those with a physical disability (such as screen reader compatability forr the blind) are the intended target, but everyone benefits from an alt image description if the image fails to load properly, or when that alt tag allows it to be found with a search engine. Having tab stops and input field tags would greatly help someone that may struggle with using a mouse for some reason, but it also benefits those using a laptop with trackpad, or those of us that just prefer to primarily use a keyboard. 

**3. Think about a website you use regularly.** Can you identify any features that might help someone with a disability use it? (Examples: buttons, navigation, text size, etc.)

Skyward is the website that the school district uses and it is one of the most terrible user experiences I have ever had. It is difficult to navigate, once you log in it opens in a new bare-bones window, the mobile version doesn't scroll correctly, and that is just the tip of the iceburg. To improve it, I would fix the media query and make it more mobile-friendly. Simply adjusting the font size and layout would make it easier to read/navigate. The forms are very basic (like, Web I basic) so putting a little bit of effort into styling them would make it a more positive experience. Adding in buttons instead of links to things would make it easier to navigate as well. 

**4. What types of disabilities might affect how someone uses the web?** Try to list at least 5 different categories.

Physical:
Physical conditions may limit the way one can actually interact with the computer screen or device that they use to navigate the webpage. Being able to navigate using only a keyboard and not relying on a mouse could help someone that has a condition such as tremors or anything that affects fine motor control. Being able to navigate with buttons instead of links would allow you to adjust the size of buttons to be easier to click. 

Sensory:
limitations such as vision or hearing loss would greatly affect how one interacted with a webpage. Needing to use a screenreader would put you at the mercy of whoever designed the page, and you would just have to hope that they tagged everything appropriately and used alternative text, etc. Hearing would probably be less impactful, but making sure any audio/video is properly captioned would negate most of this.

Intellectual/Developmental:
Having an overstimulating page, or a page that is too 'busy' could prove to be a barrier to someone with ASD or another developmental challenge. Having things very clearly labeled and having a well-designed site map could aid in navigating your page.

Mental/Behavioral:
Much like the Intellectual/developmental category, designing a page that is more streamlined and free from extra distractions can aid those that struggle with mental or behavioral challenges. A consistent layout, and logical structure will go a long way towards a positive user experience. 

Learning/Neurological:
Individuals with these challenges often require simple, consistent, and predictable design. SO all the same strategies for the previous two categories also apply here. Additionaly being mindful of font choice (maybe provide the user with a way to adjust font settings?) and size is important. 

## Part 2: Exploring Barriers

**5. Close your eyes and try to navigate a familiar website using only your keyboard** (no mouse). What was difficult? What was impossible?

It was impossible. Regardless of how much I use blackboaard on a regular basis, I am not equiped to navigate it without sight or a mouse. 


**6. Turn off the sound on your device and watch a video.** What information did you miss? How did this change your experience?

I watched the first 30 seconds of the Strings API video and it was a challenge. Even with CC on, the nuances and tone were completely missing. It was all one run-on sentence, so I had to guess at where the breaks and pauses were to make it more understandable. Even knowing the content, I was still confused and overwhelmed trying to process what I was reading (and having to read while seeing what was being displayed in the video).

**7. What barriers might prevent someone from accessing web content?** Think beyond just the disability itself—consider technology, design choices, and other factors.

Going back to my Skyward example, the layout and design of it makes it so I do not use the page. There are things that I could take care of myslef that I will instead call the school to take care of, or go in and talk to someone. 
Technology can be a barrier. If I did not have access to a computer and was relying solely on mobile devices, I  would avoid a lot of sites (such as blackboard). Conversely, if I only had computer access, I wouldn't use tools like Google nearly as often. When it comes to quickly looking something up, I almost always reach for my phone, even if I have my computer up and running. Large/inefficient websites may take too long to load based on internet connection and processing power of the device accessing it. 

**8. Have you ever encountered a website that was difficult to use?** What made it frustrating? Could those issues also affect people with disabilities?

Almost every website I have interacted with has some drawback that detracts from a positive user experience. Usually it is a navigation issue (site maps are not as ommon as they used to be) or layout/style issue. The thing is, besides the undiagnosed ADHD, I am a fairly neurotypical person with no physical limitations. If these small things are leading to a negative user experience for me, I can almost guarantee that someone with more challenges is struggling even more.

## Part 3: Legal and Ethical Dimensions

**9. Do you think website owners have a legal obligation to make their sites accessible?** Why or why not?

Do they have a legal obligation? My understanding of ADA law would say yes they do. Should they have a legal obligation though? Maybe not. That will be discussed more in the next question....

**10. Should all websites be required to be accessible, or only certain types?** Explain your reasoning.

I think all public access websites should be required to be as accessible as possible. Quite frequently,

// FIXME: finish this question!!!!!!

**11. What might be the consequences** (legal, financial, social) **for organizations that don't prioritize web accessibility?**

**12. Beyond legal requirements, what ethical reasons exist for making websites accessible?**

## Part 4: Technical Considerations & Coding for Accessibility

**13. Look at this button code:** `<div onclick="submitForm()">Submit</div>`  
**What accessibility problems might this create?** How would you improve it?

**14. What is the purpose of the `alt` attribute on images?** When should it be empty (`alt=""`) versus having descriptive text?

**15. Examine this form field:**
```html
<input type="text" placeholder="Enter your email">
```
**What's missing that would help screen reader users?** Rewrite this code snippet to be more accessible.

**16. What is semantic HTML and why does it matter for accessibility?** Give examples of semantic elements versus non-semantic alternatives (e.g., `<button>` vs `<div>`).

**17. A student creates a custom dropdown menu using only `<div>` and `<span>` elements with JavaScript.** What accessibility issues might arise? What attributes or techniques could make it accessible? (Hint: research ARIA attributes like `role`, `aria-expanded`, `aria-haspopup`)

**17a. What does ARIA stand for and what is its purpose?** Research and explain what these ARIA attributes do:
- `aria-label`
- `aria-labelledby`
- `aria-describedby`
- `aria-hidden`
- `aria-live`

**17b. Examine this icon button:**
```html
<button><i class="icon-trash"></i></button>
```
**A sighted user sees a trash can icon, but what does a screen reader user hear?** How would you use ARIA to fix this?

**18. What does "keyboard navigation" mean?** Find a website and try navigating it using only the Tab key, Enter, and arrow keys. What elements could you interact with? What couldn't you access?

**19. What is color contrast and why is it important?** If you have a light gray text (#999999) on a white background, how might you determine if it's accessible?

**20. Look at this link:** `<a href="document.pdf">Click here</a>`  
**What makes this poor for accessibility?** How would you improve the link text and what additional information might be helpful to include?

## Part 5: Real-World Application

**17. Choose a popular website and spend 5 minutes exploring it.** List 3 things that seem accessible and 3 potential accessibility issues.

Website: ___________________________

Accessible features:
- 
- 
- 

Potential issues:
- 
- 
- 

**18. If you were hired to make a company website more accessible, what would be your first three questions or concerns?**

**19. How might web accessibility practices benefit users who don't have disabilities?** Think about different contexts like mobile use, slow internet, noisy environments, etc.

**20. What aspect of web accessibility are you most curious to learn more about?** This may help focus your research paper topic.


