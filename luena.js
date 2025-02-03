images.forEach((image, index)=>{
        if(image.classList.contains('fade-out')){
            image.classList.add('fade-out')
        }else if (image.classList.contains('blackout')){
            image.classList.add('blackout-out')
        } else if (image.classList.contains('slide-right')){
            image.classList.add('slide-right')
        }
        setTimeout(()=>{
            image.src = newImages[index]

            image.classList.remove('fade-out', 'blackout-out', 'slide-right-out')
        }, 1000)
    })

    function checkService() {
        const allowedService = ["Hair Wash", "Hair Styling", "Hair Dye"];
        let selectedService = document.getElementById("Service").value.trim();
        if (selectedService.includes === "") {
            document.getElementById("message").textContent = "Select a service";
            document.getElementById("message").style.color = 'green';
            return;
        }
        if (allowedService.includes(selectedService)) {
            document.getElementById("message").textContent = "service booked!";
            document.getElementById("message").style.color = 'green';
        }
         else {
            document.getElementById("message").textContent = "Sorry, our salon doesn't provide this service.";
            document.getElementById("message").style.color = 'red';
        }
    }


    const apiKey = '2EZDjj7WtT50J23fR0ZLATAlCKamN4Li'; // My Giphy API key

    $(document).ready(function() {
        $('#get-gif').click(function() {
            fetchRandomGif();
        });
    });
    
    function fetchRandomGif() {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
    
        $.get(url, function(data) {
            const gifUrl = data.data.images.original.url;
            $('#gif-container').html(`<img src="${gifUrl}" alt="Random GIF">`);
        }).fail(function() {
            $('#gif-container').html('<p>Error fetching GIF. Please try again.</p>');
        });
    }
