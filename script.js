// Floating Letters Interaction
document.querySelectorAll('.letter').forEach(letter => {
  letter.addEventListener('click', () => {
    alert(letter.innerText); // Displays the message when a letter is clicked
  });
});

// Background Music Control (Optional)
const bgMusic = document.getElementById('bg-music');
bgMusic.play();

