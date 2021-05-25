# finding-daylight
An app to help you track when its daylight where you are. Helpfull in Sweden so you dont miss to go out and get some D-vitamins! :)

This project was made together with Emma Scott-Allen, Sofia Darke and Aleksandra Astaroth. You can check out their repos here:

We had a workaround for CORS issues so we could fetch the sunset and sunrise from an open api, but that workaround was deprecated so the app stopped working.
So after the project was ended, I wrote some backend code in Node.js so that the frontend would send a request to our server instead and then to the open api. This made the app work!
I found out that I could host this backend code in Firebase through firebase functions. So now the app is working an live and you can visit it here:
https://finding-daylight.firebaseapp.com/

This is how the app looks like:
[Pic of how it looks like](./public/images/picOfFindingDaylight.png)

Its written in vanilla JS in autum 2020.

!SPOILER ALERT!
There is a hidden feature too. Click on the sun to get some... advice I guess haha!
