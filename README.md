# Node-JWT
# node-jwt

<!-- Steps i took to fix the app is done error
1) re-logged in to heroku from the cli using heroku login updated my heroku cli to the lastest version before loggin in

2) Then ran heroku create node-jwt 

3) The git push heroku master was still getting the app down error then ran heroku logs --tall
saw i was getting and H14 error code for No web processes running

4) then finally ran heroku ps:scale web=1 and the app started running again. and you have to do this if you initially deployed your app without a procfile

also in the the procfile you have to use the exact syntax for it to work

 -->