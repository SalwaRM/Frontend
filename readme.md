# Procesverslag
**Auteur:** Salwa Ringim Mohammed

Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Nb. de standaardstructuur en de spartaanse opmaak zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.



## Bronnenlijst
1. https://www.averycoxdesign.com/ (content/images)
2. https://www.youtube.com/watch?v=DZg6UfS5zYg (hamburger menu)
3. https://www.youtube.com/watch?v=ydZc17rlR5E (hamburger menu)
4. https://www.youtube.com/watch?v=JttTcnidSdQ (parallax scrolling)
De makers van de videos zijn natuurlijk veel gevorderder dan ik en soms snapte ik niet echt wat ze deden (vooral als het gaat om Javascript), maar ik heb wel geprobeerd om wat ik wel snapte uit de video te combineren met wat ik geleerd heb in de les.
Bijvoorbeeld: in video 4 gebruikt hij 'transform: translateX();' in Javascript, maar ik snapte zijn JS voor geen meter, maar ik weet nog wel dat we 'transform' hebben gebruikt in week 5 Animaties. Dus heb ik keyframes gebruikt om de nav in te laten sliden.


## Eindgesprek (week 7/8)

-In week 5 heb ik gevraagd hoe een animatie heet. Hij heet parallax scrolling. Ik heb geprobeerd om dat toe te voegen aan m'n website, maar dat ging niet zo heel goed. Het heeft wel een parallax effect, maar de image scrollt niet. Ik vond het zo wel goed genoeg en heb het dus ook zo gelaten.
-Ik heb het hamburgermenu verbeterd. Hij werkte wel, maar de nav die toen tevoorschijn kwam, zag er niet uit en was maar half op beeld. Ik heb de nav de juiste stijl gegeven en ik heb een transition toegevoegd aan zowel het hamburger menu als de nav zelf. Het hamburgericoontje draait nu 360 graden als het menu wordt geopend en weer 360 graden terug als het wordt gesloten. De nav slides in van rechts naar links. Ik probeerde het ook weer terug naar rechts te laten sliden als hij wordt gesloten, maar dat lukt me niet. Ook heb ik een paar probleempjes met de achtergrond van de nav in mobiel format: 
1. Ik hoor niet te kunnen scrollen als de nav open is. Ik heb 'overflow: hidden;', 'overflow-y:hidden;' en 'overflow: hidden !important;' geprobeerd op verschillende containers, maar niks werkt.
2. De nav verwijst naar een article op dezelfde pagina, maar als ik op één van de li's klik, dan schuift de nav niet weg. Hij blijft daar. Dus dan zie je alleen wit. 
-Verder heb ik nog meer content toegevoegd, zoals 'Additional Press Mentions' en de footer. In week 5 had de studentassistent mij aangeraden om bij 'Additional Press Mentions' grid te gebruiken. Ik heb dat geprobeerd. Op het begin ging het niet zo goed. Dat komt vooral omdat we vorig jaar grid niet echt werd behandeld (flexbox wel). Ik heb veel moeten tekenen op papier om te snappen hoeveel containers ik nodig had en welke attributen ik op welke container moet zetten. Het grootste probleem dat ik had is dat de twee columns niet echt op één lijn zaten, dat heb ik met padding gelukkig wel kunnen oplossen.
-Voor de rest was het eigenlijk gewoon een beetje opruimen en puntjes op de i zetten. Zoals gelijke margins tussen elke artikel, focus state toevoegen en links toevoegen.
-Over focus state gesproken. Op de index pagina heb ik in de footer drie social media linkjes staan. Ik heb er in week 5 een :hover state aan toegevoegd. Ik wilde er deze week een :focus state aan toevoegen, maar echt niks lukt. Je ziet gewoon niets.
-Het laatste puntje is: ik weet niet of dit aan mij ligt, maar ik heb heel vaak gehad dat ik iets wilde stijlen, maar dat het niet werkte totdat ik !important had toegevoegd. Ik weet niet of dit een standard procedure is of een foute manier van code, maar u zult vaak !important zien in mijn code.

**Screenshot(s):**

-screenshot(s) van je eindresultaat-
![screenshot van hoe ver ik ben](../screenshotsEind/Index.jpg)
![screenshot van hoe ver ik ben](../screenshotsEind/Home.png)
![screenshot van hoe ver ik ben](../screenshotsEind/HomeBreakpoint.png)
![screenshot van hoe ver ik ben](../screenshotsEind/HomeMobile.png)
![screenshot van hoe ver ik ben](../screenshotsEind/NavMobile.png)
![screenshot van hoe ver ik ben](../screenshotsEind/PortfolioWebsite.png)
![screenshot van hoe ver ik ben](../screenshotsEind/PortfolioMobile.png)
![screenshot van hoe ver ik ben](../screenshotsEind/AboutWebsite.png)
![screenshot van hoe ver ik ben](../screenshotsEind/AboutMobile.png)
![screenshot van hoe ver ik ben](../screenshotsEind/PressWebsite.png)
![screenshot van hoe ver ik ben](../screenshotsEind/PressMobile.png)
![screenshot van hoe ver ik ben](../screenshotsEind/AddPressWebsite.png)
![screenshot van hoe ver ik ben](../screenshotsEind/AddPressMobile.png)
![screenshot van hoe ver ik ben](../screenshotsEind/FooterWebsite.png)
![screenshot van hoe ver ik ben](../screenshotsEind/FooterHoverFocus.png)
![screenshot van hoe ver ik ben](../screenshotsEind/FooterMobile.png)
![screenshot van hoe ver ik ben](../screenshotsEind/FullPageWebsite.png)
![screenshot van hoe ver ik ben](../screenshotsEind/FullPageMobile.png)

## Voortgang 3 (week 6)

- Deze week heb ik niet gewerkt aan mijn website. Ik heb ook niet deelgenomen aan de voortgangsgesprekken. Maar ik was al best ver dus in mijn ogen maakte het niet zo veel uit.



## Voortgang 2 (week 5)

- Hamburger menu was een beetje pittig. Ik heb het eigenlijk nog steeds niet helemaal af. Hij komt wel te voorschijn als het scherm kleiner wordt en je kan er ook op klikken, maar het menu dat dan tevoorschijn komt, daar moet ik nog aan werken.

- Ik heb de feedback van vorige week verwerkt. Ik de social media knoppen een :hover state gegeven.

- Ik heb wat imperfecties verbeterd: de witte achtergrond van de 'Enter Site' button vulde niet de gehele knop. Het duurde me verschrikkelijk lang om erachter te komen waar dat aan lag, maar ik heb het nu wel verbeterd.

- Ik heb het logo responsive gemaakt (mbv media query).

- Ik heb nog wat content toegevoegd. Het is nog niet helemaal af. Ik moet er met flexbox nog aan werken.

    ### Agenda voor de meeting
- Ik wil een soort animatie toevoegen aan de header image van mijn tweede pagina. Alleen weet ik niet hoe het heet dus ik kan ook niet opzoeken hoe je het moet doen.

    ### Verslag van de meeting
-De animatie heet parallax scrolling. Voor de laatste artikel is het misschien beter als ik het met grid doe. Voor de rest ben ik goed op weg.


## Voortgang 1 (week 3)

### Stand van zaken

- Background image goed krijgen ging eerst vreselijk lastig, maar toen zag ik dat er een speciale tag daarvoor is.
- Op de eerste pagina was het moeilijk om de tekst op de juiste plek te krijgen en dat het ook nog eens responsive was.
- Op de 'enter site' button wil ik dat als je erover hovert of erop klikt dat de background-color wit wordt, maar alleen een deel wordt wit.
- Op de homepagina weet ik niet hoe je nav in een hamburger menu kan veranderen wanneer het scherm kleiner wordt.
- Ook het logo responsive maken gaat een beetje moeilijk.
- Maar voor de rest ging alles wel goed.

**Screenshot(s):**

![screenshot van hoe ver ik ben](../images/screenshotvoortgang1(1).png)
![screenshot van hoe ver ik ben](../images/screenshotvoortgang1(2).png)

### Agenda voor meeting

- Z-index voor overlay van images
- Tips en Tricks Javascript

### Verslag van meeting

Ik ben goed op weg. De kleine animatie (?) op de homepagina kan ik doen met javascript dus daar moet ik even naar kijken.
Ik moet ook de social media knoppen wat leuker kunnen maken door een :hover state toe te voegen.



## Intake (week 1)

**Je startniveau:** Rood

**Je focus:** Responsive

**Je opdracht:** https://www.averycoxdesign.com/

**Screenshot(s):**

![screenshot(s) die een goed beeld geven van de website die je gaat maken](images/screenshotwebsite.jpg)

**Breakdown-schets(en):**

![-voorlopige breakdownschets(en) van een of beide pagina's van de site die je gaat maken-]Heb ik niet.
