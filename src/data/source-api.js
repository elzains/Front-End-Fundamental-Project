import $ from '../assets/js/jquery-3.6.4.min.js'

$('#search-btn').on('click', () => {
  $.ajax({
    url: 'http://omdbapi.com',
    type: 'get',
    dataType: 'json',
    data: {
      'apikey': 'dca61bcc',
      's': $('#search-input').val()
    },
    success: (results) => {
      if (results.Response == "True") {
        let films = results.Search;
        $.each(films, (i, data) => {
          $('.movie-list').append(`
            <div class="row">
              <div class="col">
                <div class="card">
                  <img src="${data.Poster}" alt="" />
                  <button type="button"><a href="">Show</a></button>
                </div>
              </div>
            </div>
          `);
        });
      } else {
        $('.movie-list').html(`<h5>Film Tidak Tersedia!</h5>`);
      }
    }
  });
});