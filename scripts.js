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
  $('.settings-screen').css('display', 'none');
  // $('.settings-screen').css('display', 'block');
}

$('.cleanup-button').on('mouseover', function() {
  $(this).addClass('revealed');
  $(this).css('background', '#990000');
})
$('.cleanup-button').on('mouseout', function() {
  $(this).removeClass('revealed');
  $(this).css('background', '#0077EE');
})
$('.cleanup-button').click(cleanUpCompletedItems);

$('.settings-button').on('mouseover', function() {
  $(this).addClass('revealed');
})
$('.settings-button').on('mouseout', function() {
  $(this).removeClass('revealed');
})
$('settings-button').on('click', revealSettingsScreen);

$('li').click(function() {
  $(this).toggleClass('completed');
});
$('.add-button').click(addListItem);
$('input').keypress(function(event) {
  if (event.which === 13) {
    addListItem();
  }
});
