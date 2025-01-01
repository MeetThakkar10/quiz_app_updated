# Quiz App

Welcome to the **Quiz App**! This is a simple interactive quiz application where you can test your knowledge on various topics. The app presents you with a series of questions and multiple-choice options. After answering each question, you'll be shown whether your answer was correct, and your score will be updated accordingly.

---

## Features

- **Multiple Questions**: The app contains multiple-choice questions.
- **Instant Feedback**: After selecting an answer, the app instantly shows whether the answer was correct or incorrect.
- **Score Calculation**: At the end of the quiz, your score will be displayed.
- **Next Question Button**: After each question, you can click **"Next"** to proceed to the next question.

---

## Technologies Used

- **HTML**: Structure of the quiz interface.
- **CSS**: Basic styling of the app.
- **JavaScript**: Logic for rendering questions, handling user interaction, and calculating the score.

---

## Demo

![image](https://github.com/user-attachments/assets/c81ad8d7-f907-4492-aaf3-51604c51336c)
![image](https://github.com/user-attachments/assets/1bbfb7a6-b289-4441-8dd9-a646bf70adf3)
![image](https://github.com/user-attachments/assets/80b4dd10-b9be-4560-9106-15f80e0c0378)
![image](https://github.com/user-attachments/assets/f7e06a89-0480-4b1b-a27a-08ac7f45878f)



---

## How to Use

1. Clone the repository to your local machine or download the files.
2. Open the `index.html` file in your browser to start the quiz.
3. Answer the questions by clicking on the options.
4. Click the **"Next"** button to move to the next question.
5. At the end of the quiz, your score will be displayed.

---


---

## How It Works

1. **Questions Array**: The app stores questions in a JavaScript array. Each question has a list of options and a status indicating whether the option is correct.
   
2. **Question Rendering**: The `Quiz()` function dynamically renders each question and its options. Each option has an event listener attached to it that calls `ansSelected()` to check if the selected answer is correct.

3. **Navigation**: After answering a question, you can click the **"Next"** button to move to the next question. Once all questions have been answered, your final score is displayed.

4. **Answer Selection**: When you select an option, the button is highlighted in **green** if the answer is correct, or **red** if it's incorrect. The answers are then disabled, and you can move to the next question.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/iazimshaikh/quiz_app.git
   cd quiz_app
   open index.html  # macOS
   start index.html # Windows (can simply open in any browser/Live Server)

## Future Improvements
- **Question Randomization**: Display questions in random order to make the quiz more dynamic.
- **User Authentication**: Allow users to log in and save their quiz history and scores.
- **Timer**: Add a countdown timer for each question.
- **More Questions**: Expand the question set to include more topics and categories.

## Contributing
Feel free to fork the repository and submit pull requests for any improvements or bug fixes. If you encounter any issues or have suggestions, open an issue on GitHub!

## License
This project is open-source and available under the MIT License.

## Contact
For any questions or feedback, feel free to reach out:

- **Email**: itsshaikhhere@gmail.com
