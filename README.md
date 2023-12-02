# README for Word Whiz

## Introduction
**Word Whiz** is an engaging and educational web-based game designed to test and improve English spelling skills. Players can choose different difficulty levels - easy, medium, and difficult - and race against the clock to select the correct spelling of words. This game is a perfect blend of learning and fun, suitable for language enthusiasts and those looking to enhance their spelling proficiency.

## Features
- **Homepage
- **Multiple Difficulty Levels**: Choose from easy, medium, or difficult levels to match your skill level.
- **Timed Challenges**: Each question must be answered within 10 seconds, making the game fast-paced and exciting.
- **Scoring System**: Earn points for each correct answer and track your progress.
- **Instant Feedback**: Receive immediate feedback on your answers, allowing effective learning.
- **Responsive Design**: The game is designed to be responsive and can be played on various devices.
- **Favicon

## Technology
- HTML/CSS for structure and styling
- Bootstrap for responsive design
- JavaScript for interactive elements and game logic

## How to Play
1. **Start the Game**: Open the game in a web browser and select a difficulty level (easy, medium, difficult).
2. **Answer Questions**: Each screen will present a word with two spelling options. Click the button with the correct spelling.
3. **Beat the Clock**: You have 10 seconds to choose an answer.
4. **Track Your Score**: Your score updates in real-time with each correct answer.
5. **Play Again**: After finishing a round, you can play again or exit the game.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/[your-username]/word-whiz.git
   ```
2. Navigate to the cloned directory.
3. Open `index.html` in a web browser to start playing.

## User Story

### Overview
As a user interested in improving my English spelling skills, I want to play a game that challenges me in a fun and interactive way, enabling me to learn while enjoying the game.

### User Story Breakdown

- **As a user, I want to...**
  - **Choose a difficulty level (easy, medium, difficult)**
    - **Acceptance Criteria**:
      - The game offers three distinct levels of difficulty.
      - I can easily select the desired level from the main menu.
      - Each level provides appropriately challenging words.
  - **Be able to play a timed spelling challenge**
    - **Acceptance Criteria**:
      - Each question has a 10-second timer.
      - The game displays a countdown and notifies me when time runs out.
  - **Receive immediate feedback on my answers**
    - **Acceptance Criteria**:
      - The game shows whether my answer is correct or incorrect right after I select an option.
      - For incorrect answers, the correct spelling is displayed.
  - **See my ongoing score as I play**
    - **Acceptance Criteria**:
      - The score is visible and updated immediately after each question.
      - The score calculation is clear and consistent.
  - **Have a responsive and user-friendly interface**
    - **Acceptance Criteria**:
      - The game's interface is clean and easy to navigate.
      - The game works well on different devices and screen sizes.
  - **Restart the game or change levels without restarting the browser**
    - **Acceptance Criteria**:
      - There are options to restart the game or go back to the main menu after each round.
      - I can change difficulty levels without needing to refresh the page or restart the browser.
  - **Learn from my mistakes and improve my spelling**
    - **Acceptance Criteria**:
      - The game provides educational value by pointing out mistakes and correct spellings.
      - There is a variety of words that help me learn and improve my spelling.

### User Satisfaction Goals
- The game should be engaging and educational, providing a challenging yet rewarding experience.
- The interface should be intuitive, allowing for easy navigation and a focus on the gameplay.
- The game should offer a sense of progression and achievement as the user improves their spelling skills.


## Testing

### Prerequisites for Testing
- Ensure you have a modern web browser like Chrome, Firefox, Safari, or Edge.
- JavaScript must be enabled in your browser.

### How to Test
1. **Load the Game**: Open `index.html` in your browser. Ensure the game loads without errors.
2. **Test Difficulty Levels**:
   - Select each difficulty level (easy, medium, difficult) and verify that questions and options correspond to the selected level.
3. **Check Responsiveness**:
   - Test the game on different devices (desktop, tablet, mobile) to ensure it scales properly.
   - You can adjust your browser window size and just observe if the layout changes accordingly.
4. **Gameplay Testing**:
   - Answer questions in each difficulty level and ensure the score updates correctly.
   - Test the timer functionality for each question.
   - Verify that the feedback for correct, incorrect, and timed-out answers is displayed as expected.
5. **Button Functionality**:
   - Ensure that the 'Play Again' and 'Exit Game' buttons work as intended.
   - Test that option buttons are selectable and show the correct or incorrect answer.
6. **Test Edge Cases**:
   - Try selecting an answer at the last second and verify that the game responds correctly.
   - Test the game behaviour if the browser window is refreshed or closed during gameplay.

### Automated Testing
If you wish to set up automated testing, you can use tools like Jest for JavaScript testing. This will require you to structure your game's code for testability and write test cases covering various scenarios.

### Reporting Issues
If you encounter any bugs or issues during testing, please report them on the [issues page](https://github.com/[igordinuzzi]/Word-Whiz/issues) with a detailed description of the problem and the steps to reproduce it.

## Usability Testing Report

### Overview
Usability testing was conducted with five fictitious participants to evaluate the user experience, interface design, and overall functionality of the "Word Whiz" game. Each participant was given a set of tasks to complete while their interactions and feedback were recorded.

### Participants
1. **Alice (Age 25, Student)**: Familiar with online games but not specifically educational ones.
2. **Bob (Age 35, Teacher)**: Interested in educational tools and has moderate technical skills.
3. **Charlie (Age 20, College Student)**: Avid gamer with high technical skills, new to language-based games.
4. **Diana (Age 40, Writer)**: Keen interest in language and spelling, average computer skills.
5. **Ethan (Age 30, Software Engineer)**: High technical skills, occasionally playing online games.

### Tasks
- Start the game and select a difficulty level.
- Answer a series of spelling questions.
- Observe score updates and feedback for answers.
- Attempt to restart the game and change difficulty levels.
- Navigate through different screens of the game.

### Findings and Observations

1. **Alice**
   - Found the game interface intuitive and easy to navigate.
   - Suggested adding more engaging animations for correct/incorrect answers.
   - Experienced slight confusion when trying to restart the game.

2. **Bob**
   - Appreciated the educational value of the game.
   - Recommended adding a feature to track progress over time.
   I found the timer to be a bit stressful and suggested an untimed mode.

3. **Charlie**
   - Enjoyed the challenge but wanted more variety in the type of questions.
   - Experienced no technical issues.
   - Suggested adding a competitive element like a leaderboard.

4. **Diana**
   - Liked the clean layout but found the font size a bit small for her preference.
   - Reported a smooth and enjoyable experience.
   - Requested more advanced levels for users who master the difficult level.

5. **Ethan**
   - Pointed out that the game was responsive and functioned well on different devices.
   - Suggested adding keyboard shortcuts for power users.
   - Found the game to be entertaining and well-structured.

### Conclusions
- The game was well-received, with all participants finding it educational and engaging.
- Suggestions for improvements included adding progress tracking, more game modes, variety in questions, and additional features for advanced users.
- The interface was generally praised for its ease of use, though minor adjustments like font size could enhance the experience.
- Incorporating feedback such as animations, leaderboards, and keyboard shortcuts could further enrich the game.

### Recommendations
- Implement a progress tracking system for educational purposes.
- Consider adding different types of questions and an untimed mode.
- Improve accessibility options, such as adjustable font sizes.
- Explore adding advanced levels and competitive elements like leaderboards.
- Enhance user engagement with animations and keyboard shortcuts for quick navigation.

## Contributing
Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/igordinuzzi/Word-Whiz/issues) if you want to contribute.


## Contact
Igor Dinuzzi - [https://github.com/igordinuzzi](https://github.com/igordinuzzi)

Project Link: [https://github.com/igordinuzzi/word-whiz](https://github.com/igordinuzzi/Word-Whiz)

