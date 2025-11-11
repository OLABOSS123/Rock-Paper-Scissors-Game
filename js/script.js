
            alert("Working Script");

                // All three Modes
                let singlePlayerSection = document.getElementById("single-player");
                singlePlayerSection.style.display = "none";

                let mode_select = document.querySelector("#mode-select");
                // mode_select.style.display = "flex";

                let multiPlayerSection = document.getElementById("multi-player");
                multiPlayerSection.style.display = "none";

                let backButton = document.querySelector(".back-btn");
                
                // Create an Audio object
                const clickSound = new Audio('../sounds/select-sound-121244.mp3');
                const music = new Audio('../sounds/musical-priest-complete-preview.mp3');
                music.currentTime = 0;
                music.loop = true;
                // music.play();

                // document.addEventListener('DOMContentLoaded', () => {
                //         // 1. MUST set muted to true to bypass the Autoplay Policy
                //         music.muted = true; 
                        
                //         // 2. Play is now allowed
                //         // music.play().catch(e => console.error("Muted autoplay failed:", e));
                //     });


                function increase_volume(){
                    music.volume = music.volume + 0.1;
                    clickSound.volume = clickSound.volume + 0.1;
                    clickSound.play();
                }

                function decrease_volume(){
                    music.volume = music.volume - 0.1;
                    clickSound.volume = clickSound.volume - 0.1;
                    clickSound.play();
                }

                function start_music() {
                    music.currentTime = 0;
                    music.loop = true;
                    music.play();
                }

                function stop_music() {
                    music.pause();
                    music.currentTime = 0;
                    music.loop = false;
                }
                
                function sound_effect(event) {
                    clickSound.currentTime = 0;
                    clickSound.play();
                }

                // Get the element
                let increase_vol = document.getElementById("vol_up");
                let decrease_vol = document.getElementById("vol_down");
                let stopMusic = document.getElementById('close_pane');
                let click_sound_elements = document.querySelectorAll('.click');
                let close_pane = document.getElementById('close_pane');
                let music_element = document.getElementById("music");

                close_pane.addEventListener('click' , sound_effect)

                // increase and decrease volume event listeners
                increase_vol.addEventListener("click", increase_volume);
                decrease_vol.addEventListener("click", decrease_volume);

                // Add a click event listener for all elements with the class 'click
                click_sound_elements.forEach(btn => {
                    btn.addEventListener('click', sound_effect);
                });

                const play_button  = document.getElementById("play_button");
                play_button.addEventListener('click', showPane);


                // Mode Select Pane Element
                const pane = document.getElementById('myPane_mode_select');

                // Function to show the pane
                function showPane() {

                    clickSound.play();
                    
                    // Remove the 'hidden-pane' class to make it visible
                    pane.classList.remove('hidePane');

                    // Add the visible class to trigger the opacity: 1 and visibility: visible
                    pane.classList.add('showPane');
                }

                // Function to hide the pane
                function hidePane() {
                    
                    // Add the 'hidden-pane' class back to hide it
                    pane.classList.add('hidePane');

                    // Remove the 'hidden-pane' class to make it visible
                    pane.classList.remove('showPane');
                }

            function select_single_player() { 
                hidePane();
                mode_select.style.display = "none";
                singlePlayerSection.style.display = "flex";
                multiPlayerSection.style.display = "none";
            }

            let singlePlayerMode = document.querySelector(".singlePlayer");
                singlePlayerMode.addEventListener('click',select_single_player);


            function startGame() {
                // Ask for player names using prompt()
                const player1 = prompt("Enter Player 1 name:");
                const player2 = prompt("Enter Player 2 name:");

                document.getElementById('p1_name').textContent =  player1;
                document.getElementById('p2_name').textContent =  player2;


                player1Name =  player1;
                player2Name =  player2;


                // You can now use the variables player1 and player2 in your game logic
                console.log(player1Name,' VS ', player2Name);
            }

            function select_multi_player(){
                hidePane();
                mode_select.style.display = "none";
                singlePlayerSection.style.display = "none";
                multiPlayerSection.style.display = "flex";
                

                requestAnimationFrame(() => {
                    multiPlayerSection.classList.add('show');
                })

                // allow both players to insert their names
                startGame();
            };

            let multiPlayerMode = document.querySelector(".multiPlayer");
                multiPlayerMode.addEventListener('click',select_multi_player);

            let musicEnabled = false; // track current state

            function toggleMusic() {
                // alert("Clicked 1");
                // 1. Get the image element using its ID
                var imageElement = document.getElementById('music');
                
                // Define the paths for your two images
                const imageOne = '../img/4x Sound Icons/Disable Music ldpi.png'; // The path for image A
                const imageTwo = '../img/4x Sound Icons/Enable Music  1ldpi.png'; // The path for image B
                
                musicEnabled = !musicEnabled;
                

                if (musicEnabled) {
                    imageElement.src = imageTwo;
                    imageElement.alt = 'Music Enabled';
                    music.currentTime = 0;
                    
                    // Add Promise handling to catch and log the Autoplay error if it occurs
                    music.play()
                        .then(() => console.log('Music started!'))
                        .catch(error => {
                            console.error('Playback failed. User must interact with the page first:', error);
                            // Optionally, switch the image back to "disabled" to reflect reality
                            imageElement.src = imageOne;
                            imageElement.alt = 'Music Disabled';
                        });
                } else {
                    imageElement.src = imageOne;
                    imageElement.alt = 'Music Disabled';
                    music.pause();

                }

                // alert(imageElement.alt);
            }


            let soundEnabled = true; // track current state

            function toggleSound() {
            const imageElement = document.getElementById('sound');
            const imageOne = '../img/4x Sound Icons/Disable Sound ldpi.png';
            const imageTwo = '../img/4x Sound Icons/Enable Sound 2ldpi.png';

            soundEnabled = !soundEnabled;

            if (soundEnabled) {
                imageElement.src = imageTwo;
                imageElement.alt = 'Sound Enabled';

                const enable_click_sound_elements = document.querySelectorAll('.modes, .theme, #close_pane, #play_button');
                enable_click_sound_elements.forEach(element => {
                    element.addEventListener('click',sound_effect);
                });
                clickSound.play();
            } else {
                imageElement.src = imageOne;
                imageElement.alt = 'Sound Disabled';

                const disable_click_sound_elements = document.querySelectorAll('.modes, .theme, #close_pane, #play_button');
                disable_click_sound_elements.forEach(element => {
                    element.removeEventListener('click', sound_effect);
                });

                click_sound_elements = document.querySelectorAll('.click');
            }
            }

            // ----------------------- Single Player Variables -------------------------
            let rock_sp  = document.querySelector(".rock_sp");
            let paper_sp  = document.querySelector(".paper_sp");
            let scissors_sp  = document.querySelector(".scissors_sp");
            // ------------------------------------------------------------------------



            // ------------------------- Multiplayer Variables -------------------------

            // ---------------------- P1 -------------------------------------------
            let rock_mp_p1  = document.querySelector(".rock_mp_p1");
            let paper_mp_p1  = document.querySelector(".paper_mp_p1");
            let scissors_mp_p1  = document.querySelector(".scissors_mp_p1");
            //----------------------------------------------------------------------


            //----------------------------P2----------------------------------------
            let rock_mp_p2  = document.querySelector(".rock_mp_p2");
            let paper_mp_p2  = document.querySelector(".paperk_mp_p2");
            let scissors_mp_p2  = document.querySelector(".scissors_mp_p2");
            //----------------------------------------------------------------------

            // -------------------------------------------------------------------------

            function rock_win(){
                const clickSound = new Audio('../sounds/metal-hit-12-193278.mp3');
                clickSound.currentTime = 0;
                clickSound.play();
            }

            function paper_win(){
                const clickSound = new Audio('../sounds/paper-crinkle-80916.mp3');
                clickSound.currentTime = 0;
                clickSound.play();
            }

            function scissors_win(){
                const clickSound = new Audio('../sounds/scissors-cutting-paper-1-101193.mp3');
                clickSound.currentTime = 0;
                clickSound.play();
            }

            function lose() { 
                const clickSound = new Audio('../sounds/classic-game-action-negative-18-224576.mp3');
                clickSound.currentTime = 0;
                clickSound.play();
            }

            function draw() { 
                const clickSound = new Audio('../sounds/select-sound-121244.mp3');
                clickSound.currentTime = 0;
                clickSound.play();
            }

            function tie(){
                const clickSound = new Audio('../sounds/classic-game-action-negative-18-224576.mp3');
                clickSound.currentTime = 0;
                clickSound.play();
            }

            function playSingle(choice) {
                        // A. Get ALL choice elements
                        const allChoices = document.querySelectorAll('.choice_sp');
                        
                        // B. Remove the 'selected-choice' class from everything first (Cleanup)
                        allChoices.forEach(img => {
                            img.style.borderColor  = "white";
                            img.style.transform = 'scale(1.0)';
                        });
                        
                        // C. Select the element that matches the choice and apply the style
                        const selectedImage = document.querySelector(`.${choice}`);
                        const choice_value = selectedImage.dataset.value; // ✅ get data-value
                        const pick = selectedImage.dataset.choice;
                        console.log(choice_value);

                        // console.log(selectedImage);
                        if (selectedImage) {
                            selectedImage.style.borderColor = 'greenyellow';
                            selectedImage.style.transform = 'scale(2.1)';
                            

                        // 1. Define the strings
                        const computerOptions = ['Rock', 'Paper', 'Scissors'];
                        // 2. Generate a random index
                        const randomIndex = Math.floor(Math.random() * computerOptions.length);
                        // 3. Select the random string
                        const randomComputerOption = computerOptions[randomIndex];
                        console.log(`You chose ${choice_value} and computer chose ${randomComputerOption}`);

                        // --- Step 3: Determine the Winner ---
                        let resultMessage = '';
                        let message  = "<br>" + `Computer chose ${randomComputerOption}`;

                        if (choice_value === randomComputerOption) {

                            resultMessage = "It's a Tie 👔";
                            resultMessage  = resultMessage + message
                            draw();


                        } else if (choice_value === 'Rock' && randomComputerOption === 'Scissors') {
                            // Player wins with Rock against Scissors
                            resultMessage = "You Win! 🎉";
                            resultMessage  = resultMessage + message
                            rock_win();

                        } else if (choice_value === 'Paper' && randomComputerOption === 'Rock') {
                            // Player wins with Paper against Rock
                            resultMessage = "You Win! 🎉";
                            resultMessage  = resultMessage + message
                        paper_win();

                        } else if (choice_value === 'Scissors' && randomComputerOption === 'Paper') {
                            // Player wins with Scissors against Paper
                            resultMessage = "You Win! 🎉";
                            resultMessage  = resultMessage + message
                            scissors_win();

                        } else {
                            // If it's not a tie and none of the above winning conditions are met,
                            // the computer must have won.
                            resultMessage = "You Lost! ❌";
                            resultMessage  = resultMessage + message
                            lose();

                        }
                        
                        // Update the result message
                        document.getElementById('single-result').innerHTML = `${resultMessage}`;
                        } else {
                            console.error(`Element with ID '${choice}' not found.`);
                        }
                    }


                    // 1. Get all images we need to monitor
                const choiceImages = document.querySelectorAll('.choice_sp');

                // 2. Loop through them and attach listeners
                choiceImages.forEach(img => {
                    
                    // Retrieve the stored choice name (e.g., 'rock')
                    const choiceName = img.getAttribute('data-choice');
                    
                    // Attach the click event listener
                    img.addEventListener('click', function() {
                        // This anonymous function runs *only* when the image is clicked.
                        // It calls the main logic function, passing the choice name.
                        playSingle(choiceName);
                    });
                });

            let player1Name = document.getElementById('p1_name').textContent;
            let player2Name = document.getElementById('p2_name').textContent;


            let player1Selection = '' ;

                function playPlayer1(p1_choice) {
                    // A. Get ALL choice elements
                    const allChoices = document.querySelectorAll('.choice_mp_p1');
                    
                    // B. Remove the 'selected-choice' class from everything first (Cleanup)
                    allChoices.forEach(img => {
                        img.style.borderColor  = "white";
                        img.style.transform = 'scale(1.0)';

                    });
                    
                    // C. Select the element that matches the choice and apply the style
                    const selectedImage = document.querySelector(`.${p1_choice}`);
                    const choice_value = selectedImage.dataset.p1_value; // ✅ get data-value
                    // const pick = selectedImage.dataset.p1_choice;

                    player1Selection = choice_value;
                    console.log(player1Selection);

                    // console.log(selectedImage);
                    if (selectedImage) {
                        selectedImage.style.borderColor = 'greenyellow';
                        selectedImage.style.transform = 'scale(1.5)';
                    }

                }

                    // 1. Get all images we need to monitor
                    const choiceImages_p1 = document.querySelectorAll('.choice_mp_p1');

                    // 2. Loop throu ;gh them and attach listeners
                    choiceImages_p1.forEach(img => {


                        img.addEventListener('click', (event) => {
        
                            // 3. Get the reference to the element that was clicked
                            // event.target is the element that triggered the event (the <img> tag)
                            const clickedImg = event.target; 
                            
                            // 4. Use your existing code on the specific clicked element
                            const choiceName_p1 = clickedImg.getAttribute('data-p1_value');
                            
                            // Example output:
                            console.log("Player 1 chose:", choiceName_p1); 
                            
                            // You can now use choiceName_p1 in your game logic
                            // ... call a function to play the game ...
                         });
                        
                        // Retrieve the stored choice name (e.g., 'rock')
                        const choiceName_p1 = img.getAttribute('data-p1_choice');
                        // console.log(choiceName_p1);f
                        const valueName_p1 = img.getAttribute('data-p1_value');
                        // console.log(valueName_p1);
            
                        // Attach the click event listener
                        img.addEventListener('click', function() {
                            // This anonymous function runs *only* when the image is clicked.
                            // It calls the main logic function, passing the choice name.
                            playPlayer1(choiceName_p1);
                        });
                });

                let player2Selection = '';

                  function playPlayer2(p2_choice) {
                    // A. Get ALL choice elements
                    const allChoices = document.querySelectorAll('.choice_mp_p2');
                    
                    // B. Remove the 'selected-choice' class from everything first (Cleanup)
                    allChoices.forEach(img => {
                        img.style.borderColor  = "white";
                        img.style.transform = 'scale(1.0)';

                    });
                    
                    // C. Select the element that matches the choice and apply the style
                    const selectedImage = document.querySelector(`.${p2_choice}`);
                    const choice_value = selectedImage.dataset.p2_value; // ✅ get data-value
                    // const pick = selectedImage.dataset.p1_choice;

                    player2Selection = choice_value;
                    console.log(player2Selection);

                    // console.log(selectedImage);
                    if (selectedImage) {
                        selectedImage.style.borderColor = 'greenyellow';
                        selectedImage.style.transform = 'scale(1.5)';
                    }
                    multiPlayer_result();
                }

                
                    // 1. Get all images we need to monitor
                    const choiceImages_p2 = document.querySelectorAll(`.choice_mp_p2`);

                    // 2. Loop through them and attach listeners
                    choiceImages_p2.forEach(img => {
                        
                        img.addEventListener('click', (event) => {
        
                            // 3. Get the reference to the element that was clicked
                            // event.target is the element that triggered the event (the <img> tag)
                            const clickedImg = event.target; 
                            
                            // Example output:
                            console.log("Player 2 chose:", clickedImg.getAttribute('data-p2_value')); 
                            
                            // You can now use choiceName_p1 in your game logic
                            // ... call a function to play the game ...
                         });

                        // Retrieve the stored choice name (e.g., 'rock')
                        const choiceName_p2 = img.getAttribute('data-p2_choice');
                        // console.log(choiceName_p2);
                        const valueName_p2 = img.getAttribute('data-p2_value');

                        // console.log(choiceImages_p2);
                        
                        // Attach the click event listener
                        img.addEventListener('click', function() {
                            // This anonymous function runs *only* when the image is clicked.
                            // It calls the main logic function, passing the choice name.
                            playPlayer2(choiceName_p2);
                        });

                });

                function disable_images() {

                    
                // A. Get ALL choice elements
                const allChoices = document.querySelectorAll('.choice_mp, .choice_mp_p1, .choice_mp_p2');

                    setTimeout(() => {
                    
                            allChoices.forEach (img => {
                                img.style.pointerEvents = "none";
                                img.style.filter = "blur(5px)";
                                img.style.opacity = "0.5";
                                img.style.borderColor  = "white";
                                img.style.transform = 'scale(1.0)';
                                img.style.transition = 'transition: transform 0.3s ease-in-out;';
                            });
                    }, 1000);
                }

                function enable_images() {
                    
                setTimeout(() => {

                        // A. Get ALL choice elements
                        const allChoices = document.querySelectorAll('.choice_mp, .choice_mp_p1, .choice_mp_p2');
                        
                        // B. Remove the 'selected-choice' class from everything first (Cleanup)
                        allChoices.forEach(img => {
                            img.style.borderColor  = "white";
                            img.style.transform = 'scale(1.0)';
                            img.style.transition = 'transition: transform 0.3s ease-in-out;';

                            img.style.pointerEvents = "auto";
                            img.style.filter = "none";
                            img.style.opacity = "1";
                            // img.style.wen = '-webkit-transform 0.3s ease-in-out';
                        });

                    }, 1000);     
                }


                let p1_score =  0;
                let p2_score = 0;
                let point = '';


                function update_scores() {

                    const element = document.querySelector('.volcano');

                    // disable_images();

                    let player1_score_text = document.querySelector('.mp_p1_score');
                    let player2_score_text =document.querySelector('.mp_p2_score');


                    if (point == player1Name) {
                        p1_score += 1;
                        player1_score_text.textContent  = p1_score;
                    } else if (point == player2Name) {
                        p2_score += 1;
                        player2_score_text.textContent  = p2_score;
                    } else if (point == 'tie') {
                        p1_score += 0;
                        p2_score += 0;
                    }

                    if (p1_score / 5 >= 1 && p1_score % 5 === 0) {

                            element.classList.remove('fade-grow');
                            element.offsetWidth; // force reflow to restart animation
                            element.classList.add('fade-grow');
                            p1_score += 1;
                            alert(`Extra Point for ${point}`);
                            player1_score_text.textContent  = p1_score;

                    } else if (p2_score / 5 >= 1 && p2_score % 5 === 0) {

                            element.classList.remove('fade-grow');
                            element.offsetWidth; // force reflow to restart animation
                            element.classList.add('fade-grow');
                            p2_score += 1;
                            alert(`Extra Point for ${point}`);
                            player2_score_text.textContent  = p2_score;
                    }

                    enable_images();
                };

                function display_details() {
                    console.log('1 point goes to : ',point);
                    console.log(`${player1Name} Score: ${p1_score} , ${player2Name} score: ${p2_score}`);
                }

                function multiPlayer_result() {

                    let resultMessage = '';
                    let errorMessage = `${player1Name} and ${player2Name} must play ❗` ;
                    const Sound = new Audio('../sounds/point-smooth-beep-230573.mp3');

                    if (player1Selection && player2Selection) {
                        if (player1Selection === player2Selection) {
                        // Handle a tie
                        resultMessage = "It's a Tie 👔";
                        point = 'tie';
                        tie();
                        update_scores();
                        display_details();
                        player1Selection = '';
                        player2Selection = '';

                        } else if (player1Selection === 'Rock' && player2Selection === 'Scissors') {
                            // Player wins with Rock against Scissors
                            resultMessage = `${player1Name} Wins! 🎉`;
                            point = player1Name;
                            Sound.play();
                            update_scores();
                            display_details();
                            player1Selection = '';
                            player2Selection = '';

                        } else if (player1Selection === 'Paper' && player2Selection === 'Rock') {
                            // Player wins with Paper against Rock
                            resultMessage = `${player1Name} Wins!! 🎉`;
                            point = player1Name;
                            Sound.play();
                            update_scores();
                            display_details();

                        } else if (player1Selection === 'Scissors' && player2Selection === 'Paper') {
                            // Player wins with Scissors against Paper
                            resultMessage = `${player1Name} Wins! 🎉`;
                            point = player1Name;
                            Sound.play();
                            update_scores();
                            display_details();
                            player1Selection = '';
                            player2Selection = '';

                        } else {
                            // If it's not a tie and none of the above winning conditions are met,
                            // the computer must have won.
                            resultMessage =`${player2Name} Wins! 🎉 `;
                            point = player2Name;
                            Sound.play();
                            update_scores();
                            display_details()
                            player1Selection = '';
                            player2Selection = '';
                        }

                        console.log(resultMessage);
                        document.getElementById('multi-result').innerHTML =  `${resultMessage}` ;
                    } else {
                        document.getElementById('multi-result').innerHTML =  `${errorMessage}` ;
                        update_scores();
                    }
                }


                backButton.addEventListener('click',goBack());
                function goBack(){
                    // A. Get ALL choice elements
                    const allChoices = document.querySelectorAll('.choice_sp, .choice_mp, .choice_mp_p1, .choice_mp_p2');
                    
                    // B. Remove the 'selected-choice' class from everything first (Cleanup)
                    allChoices.forEach(img => {
                        img.style.borderColor  = "white";
                        img.style.transform = 'scale(1.0)';
                        img.style.transition = 'transition: transform 0.3s ease-in-out;';
                        // img.style.wen = '-webkit-transform 0.3s ease-in-out';
                    });

                    // Update the result message
                    document.getElementById('single-result').textContent = '';
                    document.getElementById('multi-result').textContent = '';
                    player1Selection = '';
                    player2Selection = '';

                    singlePlayerSection.style.display = "none";
                    multiPlayerSection.style.display = "none";
                    mode_select.style.display = "flex"
                    point = '';
                    p1_score = 0;
                    p2_score = 0;
            }
