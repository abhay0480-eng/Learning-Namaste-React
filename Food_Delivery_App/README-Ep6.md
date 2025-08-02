# Monothic and Microservice architecture
- Monolith architecture - It means all the things inside same project, suppose a project is wriiten in java then we write apis, UI, Auth,  DB, SMS all written in same language java. In this all developers like backend or frontend etc work on same repositories.
- Microservice Architecture - We have diffrent services for diffrent jobs. we have BE service, UI service, Auth service, DB service, Email service. all tese micro services combine together to form an app. This is known as seperation of concerns and single responsibility principle which aech service has its own job. In this all the respective teams have thier own repo to work upon and its own deplloyment cycle. 
- How do these microservices interact with each other? These services interact with each other the UI will talk to backend , backend talk to db, backend need to talk to auth.
- When and How these services deployed and how can we access these services? suppose react is a microserveic fo UI , Backend written in java, DB written in python, so all these services have thier own ports like react on :1234, backend on  :3456, like this and thse ports are map to domain name. eg: xyz.com/api for backend, xyz.com/ for UI. it can interact by call diffrent url. 


# Dynamic Data
- To fetch data from backend there are two approches: 
1. when page loads -> make api call (500ms) -> wait for data to come -> render the UI : 
2. When page loads  -> render te UI -> Make api call -> when data comes from api -> render UI again with new Data 
- 2nd approch is beeter for UI and UX beacuse in 1st approch for 500ms page blanks and then suddenly UI shows thats a poor UX,  wheras in 2nd approch we see inital ui atleast skeleton is there and slowly data comes and website fill with data . 

# useEffect hook
- How useeffect works: 
```
useEffect(() => {} , []) 
```
Useeffect function takes two arguments , a callback function and a dependdency array. When a page is first rendered -> First UI is renderend -> after UI is rendered the callback function inside the useffect is rendered. 

# CORS policy
- When our browser (chrome) not allow us to call from one origin to another origin eg: from localhost to swiggy api, when the origin mismatch browser blocks that api call
- how we can bypass this CORS ? By using CORS chrome extension to bypass this CORS 