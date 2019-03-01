$('#logo').click(e => {
  $('#projectCards').hide('slow')
	$('#about-text-container').hide('slow')
	//$('#consultText').hide('slow')
	$('#pdh-text-container').hide('slow')
	if ($('#carousel').css('display') == 'none') {
		$('#abtBtn').css({
			"background-color": "#27a8e0",
			"color": "white"
		})
		$('#projBtn').css({
			"background-color": "#27a8e0",
			"color": "white"
		})
		$('#consultBtn').css({
			"background-color": "#27a8e0",
			"color": "white"
		})
		$('#pdhBtn').css({
			"background-color": "#27a8e0",
			"color": "white"
		})
    $('#carousel').show('slow')
  }
})

$('#abtBtn').click(e => {
  $('#carousel').hide('slow')
	$('#projectCards').hide('slow')
	//$('#consultText').hide('slow')
	$('#pdh-text-container').hide('slow')
	if ($('#about-text-container').css('display') == 'none') {
		$('#abtBtn').css({
			"background-color": "white",
			"color": "#27a8e0"
		})
		$('#projBtn').css({
			"background-color": "#27a8e0",
			"color": "white"
		})
		$('#consultBtn').css({
			"background-color": "#27a8e0",
			"color": "white"
		})
		$('#pdhBtn').css({
			"background-color": "#27a8e0",
			"color": "white"
		})
    $('#about-text-container').show('slow')
  }
})

$('#projBtn').click(e => {
  $('#carousel').hide('slow')
	$('#about-text-container').hide('slow')
	//$('#consultText').hide('slow')
	$('#pdh-text-container').hide('slow')
	if ($('#projectCards').css('display') == 'none') {
		$('#projBtn').css({
			"background-color": "white",
			"color": "#27a8e0"
		})
		$('#abtBtn').css({
			"background-color": "#27a8e0",
			"color": "white"
		})
		$('#consultBtn').css({
			"background-color": "#27a8e0",
			"color": "white"
		})
		$('#pdhBtn').css({
			"background-color": "#27a8e0",
			"color": "white"
		})
    $('#projectCards').show('slow')
  }
})

$('#pdhBtn').click(e => {
  $('#carousel').hide('slow')
	$('#about-text-container').hide('slow')
	$('#projectCards').hide('slow')
	//$('#consultText').hide('slow')
	if ($('#pdh-text-container').css('display') == 'none') {
		$('#pdhBtn').css({
			"background-color": "white",
			"color": "#27a8e0"
		})
		$('#abtBtn').css({
			"background-color": "#27a8e0",
			"color": "white"
		})
		$('#projBtn').css({
			"background-color": "#27a8e0",
			"color": "white"
		})
		$('#consultBtn').css({
			"background-color": "#27a8e0",
			"color": "white"
		})
    $('#pdh-text-container').show('slow')
  }
})