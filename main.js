let initialBackgroundColor = getComputedStyle(document.body).backgroundColor;
let currentBackgroundColor = initialBackgroundColor;

const changeBackgroundBtn = document.getElementById('changeBackgroundBtn');
document.getElementById("changeBackgroundBtn").addEventListener('click', function ()
  {
    // document.body.style.backgroundColor = "#c1c1c1";
    toggleBackgroundColor();
  });

function toggleBackgroundColor()
{
  if (currentBackgroundColor === initialBackgroundColor)
    {
        currentBackgroundColor = '#c1c1c1';
    } else
      {
        currentBackgroundColor = initialBackgroundColor;
      }
  document.body.style.backgroundColor = currentBackgroundColor;
}