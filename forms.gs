function surveyCodeDirections() {

  // Get active form
  let form = FormApp.getActiveForm();

  // Remove last item (from previous random id)
  form.deleteItem(form.getItems().length - 1);
  
  // Generate random id
  let randomId = randomInt(10000, 99999);

  // Set survey end directions
  let directions = "Here is your survey code: " + randomId +
                            "\n\nCopy and paste this survey code back in MTurk where it says " +
                            "\"Provide the survey code here.\"" +
                            "\n\nThen click \"Next\" on this survey to submit your responses.";
  let lastItem = form.addMultipleChoiceItem();
  lastItem.setTitle(directions)
          .setChoices([
            lastItem.createChoice("I understand.")
            ])
          .setRequired(true);

  // Set confirmation message
  form = form.setConfirmationMessage("Survey code: " + randomId);
}


// Generate random integer between min and max (both inclusive)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randInt = Math.floor(Math.random() * (max - min + 1) + min);
  Logger.log(randInt);
  return randInt;
}
