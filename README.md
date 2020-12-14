# CSY1018_AS2

<h1>Aims & Objectives</h1>
<p>The purpose of this assignment is to assess your ability to create an interactive web page using
Javascript, CSS and HTML.</p>
<h1>Brief:</h1>
<p>The zip file as2.zip provides some HTML and CSS for a horse racing game. Your task is to build a
web based horse racing/betting game by adding the relevant Javascript code. You must use the
existing HTML/CSS as a basis and build onto it. There are four horses which start on the start line
and after pressing the start button should run one lap around the track.</p>
<p>You can set class names on the horse elements for running/standing animations and each of the
four directions up/down/left/right. You will need to examine the CSS file to see which CSS classes
are available to use.</p>
<p>Requirements:</p>
<ol>
  <li>Rules (Basic) Make the horses perform one lap of the track, where:
    <ul>
      <li>Each horse should move to the bottom right of the screen, up to the top, across the top of the page, back down and across the line.</li>
      <li>The horses should continue following the track until they reach the start/finish line.</li>
      <li>As horses change direction and start/stop their animation should change. The animations are provided for you as CSS classes. The horses should always face the direction they are travelling. (Classes runDown, runUp, runLeft, runRight, standRight)</li>
      <li>As each horse reaches the start/finish line it completes the lap and should stop racing (the horses don’t have to stop exactly on the line, but must go over it).</li>
      <li>Pressing the start button again should reset the horses and start another lap The speed the horses run at is up to you, but a lap should not take more than one minute.</li>
    </ul>
  </li>

<li>Rules (Intermediate) Make the race randomised and implement betting, where:
  <ul>
    <li>Each horse should run at a different speed around the track.</li>
    <li>To make it so you can’t see who will win by identifying who’s fastest at the start of the race, the speed should vary as the horse goes around the track (e.g. one horse starts slow but later overtakes another horse by speeding up).</li>
    <li>Don’t have each horse turn at exactly the same point on the track.</li>
    <li>Detect the winner (the first horse to complete a lap) and display the results by listing the position and the name of the horse.</li>
    <li>The start button should be disabled while the race is in progress.</li>
  </ul>
</li>

<li>Rules (Intermediate advanced)
  <ul>
    <li>The user starts with £100 and can bet on a horse by entering the amount they wish to bet and selecting a horse.</li>
    <li>If they win, they get double their money back.</li>
    <li>They can then bet on another horse with their new funds and run the race again.</li>
  </ul>
</li>

<li>Rules (Advanced) Implement one of the following:
  <ul>
    <li>Randomly generate the odds for each horse at the beginning of the game. E.g. one horse might be 2 to 1 (you get twice your money back if you win). Another might be 100 to 1 (you get 100 times your bet back if you win). Once a horse wins, it’s odds should decrease. E.g. if it wins, on 100 to 1 odds, its odds should be reduced for the next race, if a horse comes second its odds should decrease. This should stack, for example, if a horse has lost 5 times in a row it should have high odds.</li>
    <li>Allow the user to specify a number of laps around the track that the horses will run over the course of the race before a winner is declared.</li>
    <li>Adjust the shape of the track so it’s more interesting than just a square, e.g. a figure of eight. You will need to amend the HTML/CSS and paths that the horses run.</li>
    <li>You may also implement other features you feel would be interesting to add, the level of difficultly will need to be in line with the other options in this section.</li>
  </ul>
</li>
</ol>
