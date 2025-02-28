import * as Survey from "survey-react";
import "survey-react/survey.css";

const surveyJSON = {
  title: "Dating Profile Questionnaire",
  showProgressBar: "top",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "favorite_hobby",
          title: "What is your favorite hobby?",
          choices: [
            { value: "hiking", text: "Hiking" },
            { value: "cooking", text: "Cooking" },
            { value: "reading", text: "Reading" },
            { value: "traveling", text: "Traveling" }
          ]
        },
        {
          type: "checkbox",
          name: "interests",
          title: "Select your interests:",
          choices: [
            { value: "music", text: "Music" },
            { value: "sports", text: "Sports" },
            { value: "movies", text: "Movies" },
            { value: "tech", text: "Technology" }
          ]
        }
      ]
    }
  ]
};

const SurveyComponent = () => {
  const survey = new Survey.Model(surveyJSON);

  survey.onComplete.add((sender) => {
    console.log("Survey results: ", sender.data);
    // You can also send the data to your backend API here.
  });

  return <Survey.Survey model={survey} />;
};

export default SurveyComponent;
