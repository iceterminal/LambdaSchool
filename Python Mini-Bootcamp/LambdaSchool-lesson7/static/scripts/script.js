$(function() {
	populatePosts();
});

function populatePosts(){
	$.ajax({
		url: '/posts'
	}).done(function(response){
		var template = $('#post-template').html();
		console.log('second');
		console.log('response', response);
		response.forEach(function(post) {
			var new_post = $(template).clone();
			$(new_post).find('.author').html(post[0]);
			$(new_post).find('.title').html(post[1]);
			$(new_post).find('.body').html(post[2]);
			$(new_post).find('.likes').html(post[3]);
			$(new_post).find('.like-button').on('click', function () {
				$.ajax({
					url: '/like/' + post[4]
				}).done(function() {
					$(new_post).find('.likes').html(++post[3])
				console.log('response');
					});
			});
			$('#post-list').append(new_post);
		});
	});
}

