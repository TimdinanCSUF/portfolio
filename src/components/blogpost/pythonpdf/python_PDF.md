---
title: "Python PDF Generator : Automated Data Reports"
date: "2020"
type: "blog"
---


Today I learned how to create a PDF analytics report using Python and the with FPDF library following a tutorial by Keith Galli!

To start, I learned the basics of how to use FPDF after importing the library to my code.

![Fpdf](start.png)

Running that little snippet of code generated this PDF.

![hello](hellowrld.png)

Now to add some test data, the tutorial that I followed used covid-19 statistics provided by Johns Hopkins, so out of conviencince I used the same data.

Using these commands, I am able to take my data, format into graphs, and import that graph into my PDF.
![first](.\firstplot.png)

Running this, generates a pdf with my new formatted graphs!
![firstplot](plot1pdf.png)

Now to add more pages using the command pdf.add_page, which allows me to add the content following onto a new page.  This gives me the ability to seperate pages, as well as add a title page that I can format using the FPDF library.
![coverpage](header2.png)

After creating a professional looking header using Adobe Illustrator, I was able to place it at the top of the PDF in order to give this report, and any further reports generated with this script a professional look.  The heat map on the cover is generated uses plotly, so that would dynamically change based on state by state data.  One cool thing about plotly is that it can be used to create interactive maps as well!

As I was creating this, we have been using a downloaded set of data, but as I updated it to display data from the Johns Hopkins dataset from the prior day, so now when I run the sript it will update the data to the most recent dataset.

I also adjusted the display date on the cover using the command     day = (datetime.today() - timedelta(days=1)).strftime("%m/%d/%y").replace("/0", "/").lstrip("0").  This command uses the datetime library, and formats our date into a more presentable style.

Next I will be learing how to take these reports, automatically make this script run, and email the report to whomever needs it!

## Topics Covered
Tutorial for this by Keith Galli can be found here: https://www.youtube.com/watch?v=UmN2_R4KEg8&t=1771s
1. Python
2. FPDF
3. Numpy
4. Pandas
5. Plotly
