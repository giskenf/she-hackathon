# SHE - hackathon

INTRO TEXT HERE?

![NOA](https://www.sympa.com/hubfs/Noa%20logo%20grey.png)
## Get started

1. One initial person on the team fork the repo to his/hers github.
2. The initial person adds your team members as contributors/admin to the repo
3. The rest of the team clones the repo from the initial persons github.
4. Create a .env file in root folder. You will recieve the .env template on dropbox
5. Another group member will [create a sanity project](https://www.sanity.io/docs/create-a-sanity-project) <ins>**outside**</ins> the root folder, once that is done you will need to locate the projectId inside the new folder and in `sanity.cli.ts`. Copy paste that and put it inside the .env file. Send this projectId to each group member.
6. Make sure the person who created the Sanity project invite each member as admin. (The invite will arrive on your email)
8. Add  `localhost:3000/` as  [CORS](https://www.sanity.io/docs/cors#5a355ee47b66)
9. Open terminal inside the root folder and run `npm install`
10. Once the install is complete, run `npm run dev`
13.  Open up your browser and go to  [http://localhost:3000/studio/desk](http://localhost:3000/studio)


## The Challenge

1.  First task will be to add some content to the studio. Copy paste a few fairytales from `fairytales/` folder. 

2. Second task will be to create a custom React component within the studio. The component should have a text field and a button to generate text from OpenAI api. Check out [https://platform.openai.com/docs/api-reference/introduction](https://platform.openai.com/docs/api-reference/introduction).

Example
![NOA](https://www.linkpicture.com/q/Screenshot-2023-04-13-at-20.28.59.png)



3. Task 3 will be the connection from Sanity to NextJS. Inside `Pages/fairytale/index.tsx` we have created a skeleton for you. The team will have to get out the title, slug and image from Sanity. Create a grid layout with each fairytale and make each fairytale link up to it's own slug page `Pages/fairytale/[slug].tsx`.

Example
![NOA](https://www.linkpicture.com/q/Screenshot-2023-04-13-at-20.36.17.png)


4. Task four is to create the slug page of each fairytale.  Inside the slug page you will need to show the title, image, history and the generated text. 

Example
![NOA](https://www.linkpicture.com/q/Screenshot-2023-04-13-at-20.44.14.png)

5. Task five will be to connect the generated text and make it generate a image with the OpenAI API. Documentation [here](https://platform.openai.com/docs/guides/images).


6. Task six is to create the best prompt. 

