var mainColor = '#0077EE';

function addListItem() {
  let newItem = $('.add-item').val();
  if (newItem) {
    $('li').last().after('<li>' + newItem + '</li>');
    $('li').last().click(function() {
      $(this).toggleClass('completed');
    });
    $('.add-item').val('');
  }
}

function cleanUpCompletedItems() {
  $('.completed').slideUp(250, function() {
    $('this').remove();
  });
}

function revealSettingsScreen() {
  $('.settings-screen').css('opacity', '1');
  $('.main-card').removeClass('raised');
}

function saveSettings() {
  $('.settings-screen').css('opacity', '0');
  $('.main-card').addClass('raised');
  let userName = $('.your-name').val();
  if (userName) {
    $('.nameplate').text(userName + "'s ToDo List");
  }
}

$('.cleanup-button').on('mouseover', function() {
  $(this).addClass('revealed');
  $(this).css('background', '#990000');
})
$('.cleanup-button').on('mouseout', function() {
  $(this).removeClass('revealed');
  $(this).css('background', mainColor);
})
$('.cleanup-button').click(cleanUpCompletedItems);

$('.settings-button').on('mouseover', function() {
  $(this).addClass('revealed');
})
$('.settings-button').on('mouseout', function() {
  $(this).removeClass('revealed');
})
$('.settings-button').on('click', revealSettingsScreen);

$('.save-button').on('click', saveSettings);

$('li').click(function() {
  $(this).toggleClass('completed');
});

$('.add-button').click(addListItem);

$('input').keypress(function(event) {
  if (event.which === 13) {
    addListItem();
  }
});

$('.color-swatch').on('click', function() {
  mainColor = $(this).css('backgroundColor');
  $('body').css('backgroundColor', mainColor);
  $('button').css('backgroundColor', mainColor);
  $('.settings-button').css('backgroundColor', mainColor);
  $('.cleanup-button').css('backgroundColor', mainColor);
});
