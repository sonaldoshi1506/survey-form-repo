import React from 'react';
import { ConversationalForm } from 'conversational-form';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.formFields = [

      {
        'tag': 'input',
        'type': 'radio',
        'name': 'intro1',
        'cf-questions': "Hi there! I'm SalonBot from the Triangle Group.. 😊",
        'cf-label': 'Hi.. 🙌🏻'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'intro2',
        'cf-questions': "I hope you're doing well and enjoying the lockdown..",
        'cf-label': 'Yeah 🤗'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'intro3',
        'cf-questions': "I love to talk about salon experiences and I'm eager to know yours..",
        'cf-label': "Even I'd love to talk.. 😊"
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'intro4',
        'cf-questions': "You can click on the small black triangle besides your responses anytime to change them. So ready to start?",
        'cf-label': "Yes.. Let's start 👍🏻"
      },

      // Question 1
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'hair_colour',
        'cf-questions': 'What is the natural color of your hair?',
        'cf-label': 'Black',
        'cf-image': 'https://edenhairextensions.com.au/wp-content/uploads/2017/06/products-1_JET_BLACK_06d870da-50ae-4000-acb1-0bdd64cb33ea.jpg'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'hair_colour',
        'cf-questions': 'What is the natural color of your hair?',
        'cf-label': 'Brown',
        'cf-image': 'https://edenhairextensions.com.au/wp-content/uploads/2017/06/products-6CHESTNUT_fefc6912-da6a-433d-9a13-44a943c726ef.jpg'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'hair_colour',
        'cf-questions': 'What is the natural color of your hair?',
        'cf-label': 'Blonde',
        'cf-image': 'https://edenhairextensions.com.au/wp-content/uploads/2017/06/products-613_BLEACHED_BLONDE_f1bce279-c1bc-465e-b0a3-b2b7258def5b.jpg'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'hair_colour',
        'cf-questions': 'What is the natural color of your hair?',
        'cf-label': 'Auburn',
        'cf-image': 'https://www.clairol.com/m/master/products/new_swatches/00070018116758_m.png'
      },

      // Question 2
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'hair_texture',
        'cf-questions': 'What is the natural texture of your hair?',
        'cf-label': 'Wavy'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'hair_texture',
        'cf-questions': 'What is the natural texture of your hair?',
        'cf-label': 'Straight'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'hair_texture',
        'cf-questions': 'What is the natural texture of your hair?',
        'cf-label': 'Coilly'
      },

      // Question 3
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'hair_problems',
        'cf-questions': 'Have you noticed any problems with your hair? You can mark multiple options if applicable..',
        'cf-label': 'Split Ends'
      },
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'hair_problems',
        'cf-questions': 'Have you noticed any problems with your hair? You can mark multiple options if applicable..',
        'cf-label': 'Dandruff'
      },
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'hair_problems',
        'cf-questions': 'Have you noticed any problems with your hair? You can mark multiple options if applicable..',
        'cf-label': 'Hair Fall'
      },
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'hair_problems',
        'cf-questions': 'Have you noticed any problems with your hair? You can mark multiple options if applicable..',
        'cf-label': 'Hair Thinning'
      },
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'hair_problems',
        'cf-questions': 'Have you noticed any problems with your hair? You can mark multiple options if applicable..',
        'cf-label': 'No problems'
      },

      // Question 4
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_frequency',
        'cf-questions': 'How frequently do you visit a salon?',
        'cf-label': 'Weekly'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_frequency',
        'cf-questions': 'How frequently do you visit a salon?',
        'cf-label': 'Monthly'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_frequency',
        'cf-questions': 'How frequently do you visit a salon?',
        'cf-label': 'Bi-Monthly'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_frequency',
        'cf-questions': 'How frequently do you visit a salon?',
        'cf-label': 'Only once in a while'
      },

      // Question 5
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_money',
        'cf-questions': 'How much money do you spend over one salon visit 💰?',
        'cf-label': '< 100'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_money',
        'cf-questions': 'How much money do you spend over one salon visit 💰?',
        'cf-label': '100 - 200'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_money',
        'cf-questions': 'How much money do you spend over one salon visit 💰?',
        'cf-label': '200 - 500'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_money',
        'cf-questions': 'How much do you roughly spend on a visit 💰?',
        'cf-label': '500 - 1000',
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_money',
        'cf-questions': 'How much do you roughly spend on a visit 💰?',
        'cf-label': '> 1000',
      },

      // Question 6
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_time',
        'cf-questions': 'How much time do you spend over one salon visit including waiting time ⌛?',
        'cf-label': '< 30 minutes',
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_time',
        'cf-questions': 'How much time do you spend over one salon visit including waiting time ⌛?',
        'cf-label': '30 minutes - 1 hour',
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_time',
        'cf-questions': 'How much time do you spend over one salon visit including waiting time ⌛?',
        'cf-label': '1 - 2 hour',
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_time',
        'cf-questions': 'How much time do you spend over one salon visit including waiting time ⌛?',
        'cf-label': '> 2 hour',
      },

      // Question 7
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_experience',
        'cf-questions': 'How was your last salon experience?',
        'cf-label': 'Bad 😭',
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_experience',
        'cf-questions': 'How was your last salon experience?',
        'cf-label': 'Okay 😐',
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_experience',
        'cf-questions': 'How was your last salon experience?',
        'cf-label': 'Great 🤗',
      },
      
      // Question 8
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_satisfaction',
        'cf-questions': 'Are you usually satisfied with your salon experience',
        'cf-label': 'Yes 👍🏻'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_satisfaction',
        'cf-questions': 'Are you usually satisfied with your salon experience?',
        'cf-label': 'No 👎🏻'
      },

      // Question 9
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_distance',
        'cf-questions': 'How far is your salon?',
        'cf-label': 'Nearby'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_distance',
        'cf-questions': 'How far is your salon?',
        'cf-label': 'Far Away'
      },

      // Question 10
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_travel_ok',
        'cf-questions': 'Would you mind to go a bit more distance for a better salon experience?',
        'cf-label': 'Yes 👍🏻'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'salon_travel_ok',
        'cf-questions': 'Would you mind to go a bit more distance for a better salon experience?',
        'cf-label': 'No 👎🏻'
      },

      // Question 11
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'salon_decision',
        'cf-questions': 'How do you decide which salon to go to? Check all factors you look at..',
        'cf-label': 'Cost'
      },
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'salon_decision',
        'cf-questions': 'How do you decide which salon to go to? Check all factors you look at..',
        'cf-label': 'Preferred barber'
      },
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'salon_decision',
        'cf-questions': 'How do you decide which salon to go to? Check all factors you look at..',
        'cf-label': 'Time consumed'
      },
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'salon_decision',
        'cf-questions': 'How do you decide which salon to go to? Check all factors you look at..',
        'cf-label': 'Distance from home'
      },
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'salon_decision',
        'cf-questions': 'How do you decide which salon to go to? Check all factors you look at..',
        'cf-label': 'Treatment quality'
      },
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'salon_decision',
        'cf-questions': 'How do you decide which salon to go to? Check all factors you look at..',
        'cf-label': 'Use products from top brands'
      },

      // Question 12
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'haircut_in_mind',
        'cf-questions': 'Do you have a haircut in mind before visiting the salon?',
        'cf-label': 'Yes 👍🏻'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'haircut_in_mind',
        'cf-questions': 'Do you have a haircut in mind before visiting the salon?',
        'cf-label': 'No 👎🏻'
      },

      // Question 13
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'hair_experiment',
        'cf-questions': 'Do you like to experiment with your hair?',
        'cf-label': 'Yes 👍🏻'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'hair_experiment',
        'cf-questions': 'Do you like to experiment with your hair?',
        'cf-label': 'No 👎🏻'
      },

      // Question 14
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'haircut_decision',
        'cf-questions': 'What helps you decide what kind of haircut to get? Check all things you look at..',
        'cf-label': 'Seeing Others'
      },
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'haircut_decision',
        'cf-questions': 'What helps you decide what kind of haircut to get? Check all things you look at..',
        'cf-label': 'Online Posts'
      },
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'haircut_decision',
        'cf-questions': 'What helps you decide what kind of haircut to get? Check all things you look at..',
        'cf-label': 'Your Previous Styles'
      },
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'haircut_decision',
        'cf-questions': 'What helps you decide what kind of haircut to get? Check all things you look at..',
        'cf-label': "Barber's Suggestion"
      },

      // Question 15
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'online_booking',
        'cf-questions': 'Have you booked an online appointment for a salon visit before?',
        'cf-label': 'Yes 👍🏻'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'online_booking',
        'cf-questions': 'Have you booked an online appointment for a salon visit before?',
        'cf-label': 'No 👎🏻'
      },

      // Question 16
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'got_discount',
        'cf-questions': 'Do you get a discount on any salon services like haircut or shaving?',
        'cf-label': 'Never',
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'got_discount',
        'cf-questions': 'Do you get a discount on any salon services like haircut or shaving?',
        'cf-label': 'Sometimes',
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'got_discount',
        'cf-questions': 'Do you get a discount on any salon services like haircut or shaving?',
        'cf-label': 'Always',
      },

      // Question 17
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'products_use',
        'cf-questions': 'Do you use any of these hair products frequently? Check all that you use.. ',
        'cf-label': "Shampoo"
      },
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'products_use',
        'cf-questions': 'Do you use any of these hair products frequently? Check all that you use.. ',
        'cf-label': "Hair Gel / Wax"
      },
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'products_use',
        'cf-questions': 'Do you use any of these hair products frequently? Check all that you use.. ',
        'cf-label': "Hair Colour"
      },
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'products_use',
        'cf-questions': 'Do you use any of these hair products frequently? Check all that you use.. ',
        'cf-label': "Hair Dryer"
      },
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'products_use',
        'cf-questions': 'Do you use any of these hair products frequently? Check all that you use.. ',
        'cf-label': "Hair Oil"
      },
      {
        'tag': 'input',
        'type': 'checkbox',
        'name': 'products_use',
        'cf-questions': 'Do you use any of these hair products frequently? Check all that you use.. ',
        'cf-label': "No I don't"
      },

      // Question 18
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'products_money',
        'cf-questions': 'How much do you spend over hair care products in a month 💰?',
        'cf-label': "< 200"
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'products_money',
        'cf-questions': 'How much do you spend over hair care products in a month 💰?',
        'cf-label': "200 - 500"
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'products_money',
        'cf-questions': 'How much do you spend over hair care products in a month 💰?',
        'cf-label': "500 - 1000"
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'products_money',
        'cf-questions': 'How much do you spend over hair care products in a month 💰?',
        'cf-label': "> 1000"
      },

      // Question 19
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'oil_frequency',
        'cf-questions': 'How frequently do you oil your hair?',
        'cf-label': "Daily"
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'oil_frequency',
        'cf-questions': 'How frequently do you oil your hair?',
        'cf-label': "Few times a week"
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'oil_frequency',
        'cf-questions': 'How frequently do you oil your hair?',
        'cf-label': "Once a week"
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'oil_frequency',
        'cf-questions': 'How frequently do you oil your hair?',
        'cf-label': "Only once in a while"
      },

      // Question 20
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'survey_experience',
        'cf-questions': 'Promise. Last question. \nHow was your experience taking to me?',
        'cf-label': 'Great.. 👍🏻'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'survey_experience',
        'cf-questions': 'Promise. Last question. \nHow was your experience taking to me?',
        'cf-label': 'Not so great.. 👎🏻'
      },

    ];
    
    this.submitCallback = this.submitCallback.bind(this);
  }
  
  componentDidMount() {
    this.cf = ConversationalForm.startTheConversation({
      options: {
	      theme: 'dark',
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
        showProgressBar: true,
        userInterfaceOptions: {robot: {showThinking: true}}
        // loadExternalStyleSheet: false
      },
      tags: this.formFields
    });
    this.elem.appendChild(this.cf.el);
  }
  
  submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);
    console.log("Formdata, obj:", formDataSerialized);
    this.cf.addRobotChatResponse("You are done. Check the dev console for form data output.")
  }
  
  render() {
    return (
      <div>
        <div
          ref={ref => this.elem = ref}
        />
      </div>
    );
  }
}