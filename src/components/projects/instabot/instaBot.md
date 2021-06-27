---
title: "Instagram Bot"
type: "project"
brief: "Bot that uses web scraping and API's to post AI generated images of people that do not actually exsist!"
---

After stumbling upon [thispersondoesnotexsist.com](https://thispersondoesnotexist.com/), I was inspired to create a decitated instagram page, run by a python bot, that posted images of AI generated humans that do not acutally exsist.

<h3>This Person Does Not Exsist</h3>
Each time this page refreshes, a machine learning program on the back end generates a realistic looking person based of random traits.  If you notice in the example below, the background is very starnge looking and blends right in with this fake persons shirt.  
  
<br></br>




<h2>Python Needed</h2>

* Web Scraper
* File Manager
* Instagram API

After considering a few options, I decided on the following libraries to complete this task.

* Requests - used to scrap the site for the image
* shutil - used to save the file locally.
* instabot - used to login and post the image, along with the caption "TPDNE"

This project gave me a great introduction in dealing with webscraping for images, managing files with python, and using API to access and interact with 3rd party applications.

Below is a section of the code I used to scrap the image from the site, save it, and rename the file with the current date and time. 



```
## Set up the image URL and filename
image_url = "https://thispersondoesnotexist.com/image"
filename = image_url.split("/")[-1]

# Open the url image, set stream to True, this will return the stream content.
r = requests.get(image_url, stream = True)

# Check if the image was retrieved successfully
if r.status_code == 200:
    # Set decode_content value to True, otherwise the downloaded image file's size will be zero.
    r.raw.decode_content = True

    # Open a local file with wb ( write binary ) permission.
    with open(filename,'wb') as f:
        shutil.copyfileobj(r.raw, f)

    print('Image sucessfully Downloaded: ',filename)
else:
    print('Image Couldn\'t be retreived')

# Take new image and save it with timestamp.
Current_Date = datetime.datetime.today().strftime ('%d-%b-%Y')
os.rename(r'image',r'img_' + str(Current_Date) + '.jpeg')

os.system('bot.py')

```
Here is an example of what a post looke like after running my app.  Each time I run the app it will post an image of a new non-exsistent person with the caption "TPDNE".
![TPDNE](tpdne.jpg)

