

$(function() {
	$('.main-carousel').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true
	});
	
	//SMOOTH SCROLL 
	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html, body').animate({
	        scrollTop: target.offset().top
	      }, 1000);
	      return false;
	    }
	  }
	});

	$('#home_link').on('click', () => {
			$('html, body').animate({
		        scrollTop: $('body').offset().top
		    }, 1500);
	})
	$('#about_link').on('click', () => {
			$('html, body').animate({
		        scrollTop: $('.aboutDiv').offset().top
		    }, 1500);
	})
	$('#arch_link').on('click', () => {
			$('html, body').animate({
		        scrollTop: $('.archDiv').offset().top
		    }, 1500);
	})
	$('#photo_link').on('click', () => {
			$('html, body').animate({
		        scrollTop: $('.photoDiv').offset().top
		    }, 1500);
	})
	$('#contact_link').on('click', () => {
			$('html, body').animate({
		        scrollTop: $('.contactDiv').offset().top
		    }, 1500);
	})

	//NAV BAR CHANGE ON SCROLL
	$(window).on('load scroll', function() {
		if($(this).scrollTop() > 150) {
			$('nav').addClass('main-nav-scrolled')
		} else {
			$('nav').removeClass('main-nav-scrolled')
		}
	})

	$('.hamburgerMenu').click(() => {
		$('ul.nav-bar').slideToggle();
	})

	$(document).on('click', '#spanish', () => {
		

		$('.about-text, #nav').toggleClass('testWork');
		// $('.previewText').toggleClass('testWork');

		if ($('.about-text, #nav').hasClass('testWork')) {
			$('.about-text').empty().append(englishAboutText);
			$('#nav').empty().append(englishNav);
			if ($('body').hasClass('homepage')) {
				$('.previewText').empty().append(engPreviewText);
				$('#secHeadAbout').empty().append(engHeadAbout);
				$('#secHeadArch').empty().append(engHeadArch);
				$('#secHeadPhoto').empty().append(engHeadPhoto);
				$('#secHeadContact').empty().append(engHeadContact);
				$('.header-text').empty().append(engHeadText);
			}
			if ($('body').hasClass('proj1')) {
				$('#main').empty().append(engProjOne);
			}
			if ($('body').hasClass('proj2')) {
				$('#main').empty().append(engProjTwo);
			}
			if ($('body').hasClass('proj3')) {
				$('#main').empty().append(engProjThree);
			}
			if ($('body').hasClass('proj4')) {
				$('#main').empty().append(engProjFour);
			}
			if ($('body').hasClass('proj5')) {
				$('#main').empty().append(engProjFive);
			}
			if ($('body').hasClass('proj6')) {
				$('#main').empty().append(engProjSix);
			}

		} 
		// if ($('.previewText').hasClass('testWork')) {
		// 	$('.previewText').empty().append(EngPreviewText);
		// } 

		if (!$('.about-text, #nav').hasClass('testWork')) {
			$('.about-text').empty().append(spanishAboutText);
			$('#nav').empty().append(spanishNav);

			if ($('body').hasClass('homepage')) {
				$('.previewText').empty().append(spanPreviewText);
				$('#secHeadAbout').empty().append(spanHeadAbout);
				$('#secHeadArch').empty().append(spanHeadArch);
				$('#secHeadPhoto').empty().append(spanHeadPhoto);
				$('#secHeadContact').empty().append(spanHeadContact);
				$('.header-text').empty().append(spanHeadText);
			}


			if ($('body').hasClass('proj1')) {
				$('#main').empty().append(spanProjOne);
			}
			if ($('body').hasClass('proj2')) {
				$('#main').empty().append(spanProjTwo);
			}
			if ($('body').hasClass('proj3')) {
				$('#main').empty().append(spanProjThree);
			}
			if ($('body').hasClass('proj4')) {
				$('#main').empty().append(spanProjFour);
			}
			if ($('body').hasClass('proj5')) {
				$('#main').empty().append(spanProjFive);
			}
			if ($('body').hasClass('proj6')) {
				$('#main').empty().append(spanProjSix);
			}

		}
	})




	

	$('.carousel-cell-first').hover(function() {
		$(this).find('.carousel-description').toggleClass('description-hover');
		$(this).find('.carousel-image').toggleClass('description-hover');
		$(this).find('.carousel-photo-description').toggleClass('description-hover');
		console.log(this);
	})

	$('.read-more').click(function() {
		$('.moreCell').slideToggle('slow');
	})



	$('.fa-chevron-circle-right').click(function() {
		$('.row1').toggleClass('hidden');
		$('.row2').toggleClass('hidden');
	})
	$('.fa-chevron-circle-left').click(function() {
		$('.row1').toggleClass('hidden');
		$('.row2').toggleClass('hidden');
	})

	$('.carousel-cell').on('click', function() {
		console.log(this);

	})
})





const spanishAboutText = (`<p>
			Arquitecta nacida en Puebla, México, desde pequeña mostró talento e interés hacia la arquitectura y fotografía así como una especial inclinación hacia la ecología y medio ambiente. Culminó sus estudios universitarios en la Universidad de las Américas Puebla en Puebla, México, durante tal periodo colaboró en proyectos arquitectónicos de diseño y construcción en México y Austria.
		</p>
		<p>
			En la actualidad, reside en la Ciudad de México en donde ha desarrollado habilidades y conocimiento en acabados de lujo, confort e interiores. Su objetivo como arquitecta es lograr un impacto positivo en la sociedad mediante la contribución de ideas innovadoras en el ámbito de ecología y construcción.
		</p>`)
const englishAboutText = (`<p>
			Karla Perez is an architect born in Puebla, Mexico, since she was young she has shown talent and interest in architecture and photography showing a special inclination to ecology and environment. She completed her undergraduate studies at  Universidad de las Américas Puebla in Puebla México, during that period she worked in architectural design and construction projects in Mexico and Austria.
		</p>
		<p>
			Currently she resides in Mexico City where she has developed skills and knowledge in luxury finishes, comfort and interiors. Her aim as an architect  is to achieve  a positive impact on society by contributing with innovative ideas in the field of ecology and construction.
		</p>`)
const englishNav = (`
		<ul class="nav-bar fl-row">
			<li>
				<a id="about_link" href="#about">About</a>
			</li>
			<li>
				<a id="arch_link" href="#architecture">Architecture</a>
			</li>
			<li>
				<a id="photo_link" href="#photography">Photography</a>
			</li>
			<li>
				<a id="contact_link" href="#contact">Contact</a>
			</li>
			<div class="langMenu" id="spanish">
				<img src="public/assets/english.png" alt="">
				<span>ENG</span>
			</div>
		</ul>
	`)
const spanishNav = (`
		<ul class="nav-bar fl-row">
			<li>
				<a id="about_link" href="#about">About</a>
			</li>
			<li>
				<a id="arch_link" href="#architecture">Arquitectura</a>
			</li>
			<li>
				<a id="photo_link" href="#photography">Fotographía</a>
			</li>
			<li>
				<a id="contact_link" href="#contact">Contacto</a>
			</li>
			<div class="langMenu" id="spanish">
				<img src="public/assets/spanish.png" alt="">
				<span>MXN</span>
			</div>
		</ul>
	`)

const engPreviewText = (`
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur odio quidem impedit aut voluptates ullam autem similique.</p>
	`)

const spanPreviewText = (`
			<p>Hola Karla! Aqui puedes poner mas informacion de tu proyecto.. Una o dos oraciones sobre este proyecto</p>
	`)

const engHeadAbout = (`
	<h2>About</h2>
	<div class="keyline"></div>
	`)
const engHeadArch = (`
	<h2>Architecture</h2>
	<div class="keyline"></div>
	`)
const engHeadPhoto = (`
	<h2>Photography</h2>
	<div class="keyline"></div>
	`)
const engHeadContact = (`
	<h2>Contact</h2>
	<div class="keyline"></div>
	`)

const spanHeadAbout = (`
	<h2>About</h2>
	<div class="keyline"></div>
	`)
const spanHeadArch = (`
	<h2>Arquitectura</h2>
	<div class="keyline"></div>
	`)
const spanHeadPhoto = (`
	<h2>Fotographía</h2>
	<div class="keyline"></div>
	`)
const spanHeadContact = (`
	<h2>Contacto</h2>
	<div class="keyline"></div>
	`)

const engHeadText = (`
		<h1>Karla Perez</h1>
		<h2>Architect</h2>
	`)
const spanHeadText = (`
		<h1>Karla Perez</h1>
		<h2>Arquitecta</h2>
	`)



const engProjOne = (`
	<section class="wrapper fl-col aboutDiv">
		<div class="sectionTitle">
			<h2>Description</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem explicabo libero voluptas quaerat quas sint itaque labore ab culpa, perferendis magni nihil amet, expedita. Nisi quos, doloremque inventore adipisci expedita saepe numquam a quam, dolorem consequuntur amet autem atque eos id est ut maiores rem reiciendis ipsam, molestiae nulla. Nostrum quia voluptas, alias accusamus perspiciatis praesentium, vel magnam aliquam. Eius esse, numquam sunt corrupti aspernatur molestias minima accusantium rerum possimus fugiat, provident nihil reiciendis, mollitia.</p>
		</div>
		<div class="sectionTitle">
			<h2>Role</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, numquam.</p>
		</div>

		<div class="projectDetails wrapper">
			<div class="eachDetail">
				<p class="detailHeader">Format</p>
				<p>Layered PSD Format</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Dimensions</p>
				<p>3500x2500</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Technology</p>
				<p>Photoshop, HTML, CSS</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Website</p>
				<p>www.projectwebsite.com</p>
			</div>
		</div>
	</section>
	<section class="wrapper">
		<ul class="detailPhotoContainer">
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div  class="detailPic small">
				<img src="public/assets/vert.jpg" alt="">
			</div>
			<div class="detailPic full">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic small">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
		</ul>
	</section>
	`)

const spanProjOne = (`
	<section class="wrapper fl-col aboutDiv">
		<div class="sectionTitle">
			<h2>Descripción</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>	Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. </p>
		</div>
		<div class="sectionTitle">
			<h2>Role</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
		</div>

		<div class="projectDetails wrapper">
			<div class="eachDetail">
				<p class="detailHeader">Format</p>
				<p>Layered PSD Format</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Dimensions</p>
				<p>3500x2500</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Technology</p>
				<p>Photoshop, HTML, CSS</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Website</p>
				<p>www.projectwebsite.com</p>
			</div>
		</div>
	</section>
	<section class="wrapper">
		<ul class="detailPhotoContainer">
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div  class="detailPic small">
				<img src="public/assets/vert.jpg" alt="">
			</div>
			<div class="detailPic full">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic small">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
		</ul>
	</section>
	`)



const engProjTwo = (`
	<section class="wrapper fl-col aboutDiv">
		<div class="sectionTitle">
			<h2>Description</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem explicabo libero voluptas quaerat quas sint itaque labore ab culpa, perferendis magni nihil amet, expedita. Nisi quos, doloremque inventore adipisci expedita saepe numquam a quam, dolorem consequuntur amet autem atque eos id est ut maiores rem reiciendis ipsam, molestiae nulla. Nostrum quia voluptas, alias accusamus perspiciatis praesentium, vel magnam aliquam. Eius esse, numquam sunt corrupti aspernatur molestias minima accusantium rerum possimus fugiat, provident nihil reiciendis, mollitia.</p>
		</div>
		<div class="sectionTitle">
			<h2>Role</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, numquam.</p>
		</div>

		<div class="projectDetails wrapper">
			<div class="eachDetail">
				<p class="detailHeader">Format</p>
				<p>Layered PSD Format</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Dimensions</p>
				<p>3500x2500</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Technology</p>
				<p>Photoshop, HTML, CSS</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Website</p>
				<p>www.projectwebsite.com</p>
			</div>
		</div>
	</section>
	<section class="wrapper">
		<ul class="detailPhotoContainer">
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div  class="detailPic small">
				<img src="public/assets/vert.jpg" alt="">
			</div>
			<div class="detailPic full">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic small">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
		</ul>
	</section>
	`)

const spanProjTwo = (`
	<section class="wrapper fl-col aboutDiv">
		<div class="sectionTitle">
			<h2>Descripción</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>	Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. </p>
		</div>
		<div class="sectionTitle">
			<h2>Role</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
		</div>

		<div class="projectDetails wrapper">
			<div class="eachDetail">
				<p class="detailHeader">Format</p>
				<p>Layered PSD Format</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Dimensions</p>
				<p>3500x2500</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Technology</p>
				<p>Photoshop, HTML, CSS</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Website</p>
				<p>www.projectwebsite.com</p>
			</div>
		</div>
	</section>
	<section class="wrapper">
		<ul class="detailPhotoContainer">
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div  class="detailPic small">
				<img src="public/assets/vert.jpg" alt="">
			</div>
			<div class="detailPic full">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic small">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
		</ul>
	</section>
	`)



const engProjThree = (`
	<section class="wrapper fl-col aboutDiv">
		<div class="sectionTitle">
			<h2>Description</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem explicabo libero voluptas quaerat quas sint itaque labore ab culpa, perferendis magni nihil amet, expedita. Nisi quos, doloremque inventore adipisci expedita saepe numquam a quam, dolorem consequuntur amet autem atque eos id est ut maiores rem reiciendis ipsam, molestiae nulla. Nostrum quia voluptas, alias accusamus perspiciatis praesentium, vel magnam aliquam. Eius esse, numquam sunt corrupti aspernatur molestias minima accusantium rerum possimus fugiat, provident nihil reiciendis, mollitia.</p>
		</div>
		<div class="sectionTitle">
			<h2>Role</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, numquam.</p>
		</div>

		<div class="projectDetails wrapper">
			<div class="eachDetail">
				<p class="detailHeader">Format</p>
				<p>Layered PSD Format</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Dimensions</p>
				<p>3500x2500</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Technology</p>
				<p>Photoshop, HTML, CSS</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Website</p>
				<p>www.projectwebsite.com</p>
			</div>
		</div>
	</section>
	<section class="wrapper">
		<ul class="detailPhotoContainer">
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div  class="detailPic small">
				<img src="public/assets/vert.jpg" alt="">
			</div>
			<div class="detailPic full">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic small">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
		</ul>
	</section>
	`)

const spanProjThree = (`
	<section class="wrapper fl-col aboutDiv">
		<div class="sectionTitle">
			<h2>Descripción</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>	Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. </p>
		</div>
		<div class="sectionTitle">
			<h2>Role</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
		</div>

		<div class="projectDetails wrapper">
			<div class="eachDetail">
				<p class="detailHeader">Format</p>
				<p>Layered PSD Format</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Dimensions</p>
				<p>3500x2500</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Technology</p>
				<p>Photoshop, HTML, CSS</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Website</p>
				<p>www.projectwebsite.com</p>
			</div>
		</div>
	</section>
	<section class="wrapper">
		<ul class="detailPhotoContainer">
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div  class="detailPic small">
				<img src="public/assets/vert.jpg" alt="">
			</div>
			<div class="detailPic full">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic small">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
		</ul>
	</section>
	`)



const engProjFour = (`
	<section class="wrapper fl-col aboutDiv">
		<div class="sectionTitle">
			<h2>Description</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem explicabo libero voluptas quaerat quas sint itaque labore ab culpa, perferendis magni nihil amet, expedita. Nisi quos, doloremque inventore adipisci expedita saepe numquam a quam, dolorem consequuntur amet autem atque eos id est ut maiores rem reiciendis ipsam, molestiae nulla. Nostrum quia voluptas, alias accusamus perspiciatis praesentium, vel magnam aliquam. Eius esse, numquam sunt corrupti aspernatur molestias minima accusantium rerum possimus fugiat, provident nihil reiciendis, mollitia.</p>
		</div>
		<div class="sectionTitle">
			<h2>Role</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, numquam.</p>
		</div>

		<div class="projectDetails wrapper">
			<div class="eachDetail">
				<p class="detailHeader">Format</p>
				<p>Layered PSD Format</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Dimensions</p>
				<p>3500x2500</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Technology</p>
				<p>Photoshop, HTML, CSS</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Website</p>
				<p>www.projectwebsite.com</p>
			</div>
		</div>
	</section>
	<section class="wrapper">
		<ul class="detailPhotoContainer">
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div  class="detailPic small">
				<img src="public/assets/vert.jpg" alt="">
			</div>
			<div class="detailPic full">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic small">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
		</ul>
	</section>
	`)

const spanProjFour = (`
	<section class="wrapper fl-col aboutDiv">
		<div class="sectionTitle">
			<h2>Descripción</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>	Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. </p>
		</div>
		<div class="sectionTitle">
			<h2>Role</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
		</div>

		<div class="projectDetails wrapper">
			<div class="eachDetail">
				<p class="detailHeader">Format</p>
				<p>Layered PSD Format</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Dimensions</p>
				<p>3500x2500</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Technology</p>
				<p>Photoshop, HTML, CSS</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Website</p>
				<p>www.projectwebsite.com</p>
			</div>
		</div>
	</section>
	<section class="wrapper">
		<ul class="detailPhotoContainer">
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div  class="detailPic small">
				<img src="public/assets/vert.jpg" alt="">
			</div>
			<div class="detailPic full">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic small">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
		</ul>
	</section>
	`)


const engProjFive = (`
	<section class="wrapper fl-col aboutDiv">
		<div class="sectionTitle">
			<h2>Description</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem explicabo libero voluptas quaerat quas sint itaque labore ab culpa, perferendis magni nihil amet, expedita. Nisi quos, doloremque inventore adipisci expedita saepe numquam a quam, dolorem consequuntur amet autem atque eos id est ut maiores rem reiciendis ipsam, molestiae nulla. Nostrum quia voluptas, alias accusamus perspiciatis praesentium, vel magnam aliquam. Eius esse, numquam sunt corrupti aspernatur molestias minima accusantium rerum possimus fugiat, provident nihil reiciendis, mollitia.</p>
		</div>
		<div class="sectionTitle">
			<h2>Role</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, numquam.</p>
		</div>

		<div class="projectDetails wrapper">
			<div class="eachDetail">
				<p class="detailHeader">Format</p>
				<p>Layered PSD Format</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Dimensions</p>
				<p>3500x2500</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Technology</p>
				<p>Photoshop, HTML, CSS</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Website</p>
				<p>www.projectwebsite.com</p>
			</div>
		</div>
	</section>
	<section class="wrapper">
		<ul class="detailPhotoContainer">
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div  class="detailPic small">
				<img src="public/assets/vert.jpg" alt="">
			</div>
			<div class="detailPic full">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic small">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
		</ul>
	</section>
	`)

const spanProjFive = (`
	<section class="wrapper fl-col aboutDiv">
		<div class="sectionTitle">
			<h2>Descripción</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>	Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. </p>
		</div>
		<div class="sectionTitle">
			<h2>Role</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
		</div>

		<div class="projectDetails wrapper">
			<div class="eachDetail">
				<p class="detailHeader">Format</p>
				<p>Layered PSD Format</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Dimensions</p>
				<p>3500x2500</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Technology</p>
				<p>Photoshop, HTML, CSS</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Website</p>
				<p>www.projectwebsite.com</p>
			</div>
		</div>
	</section>
	<section class="wrapper">
		<ul class="detailPhotoContainer">
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div  class="detailPic small">
				<img src="public/assets/vert.jpg" alt="">
			</div>
			<div class="detailPic full">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic small">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
		</ul>
	</section>
	`)


const engProjSix = (`
	<section class="wrapper fl-col aboutDiv">
		<div class="sectionTitle">
			<h2>Description</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem explicabo libero voluptas quaerat quas sint itaque labore ab culpa, perferendis magni nihil amet, expedita. Nisi quos, doloremque inventore adipisci expedita saepe numquam a quam, dolorem consequuntur amet autem atque eos id est ut maiores rem reiciendis ipsam, molestiae nulla. Nostrum quia voluptas, alias accusamus perspiciatis praesentium, vel magnam aliquam. Eius esse, numquam sunt corrupti aspernatur molestias minima accusantium rerum possimus fugiat, provident nihil reiciendis, mollitia.</p>
		</div>
		<div class="sectionTitle">
			<h2>Role</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, numquam.</p>
		</div>

		<div class="projectDetails wrapper">
			<div class="eachDetail">
				<p class="detailHeader">Format</p>
				<p>Layered PSD Format</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Dimensions</p>
				<p>3500x2500</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Technology</p>
				<p>Photoshop, HTML, CSS</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Website</p>
				<p>www.projectwebsite.com</p>
			</div>
		</div>
	</section>
	<section class="wrapper">
		<ul class="detailPhotoContainer">
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div  class="detailPic small">
				<img src="public/assets/vert.jpg" alt="">
			</div>
			<div class="detailPic full">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic small">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
		</ul>
	</section>
	`)

const spanProjSix = (`
	<section class="wrapper fl-col aboutDiv">
		<div class="sectionTitle">
			<h2>Descripción</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>	Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. </p>
		</div>
		<div class="sectionTitle">
			<h2>Role</h2>
			<div class="keyline"></div>
		</div>
		<div class="about-box content-wrapper fl-row">
			<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
		</div>

		<div class="projectDetails wrapper">
			<div class="eachDetail">
				<p class="detailHeader">Format</p>
				<p>Layered PSD Format</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Dimensions</p>
				<p>3500x2500</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Technology</p>
				<p>Photoshop, HTML, CSS</p>
			</div>
			<div class="eachDetail">
				<p class="detailHeader">Website</p>
				<p>www.projectwebsite.com</p>
			</div>
		</div>
	</section>
	<section class="wrapper">
		<ul class="detailPhotoContainer">
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div  class="detailPic small">
				<img src="public/assets/vert.jpg" alt="">
			</div>
			<div class="detailPic full">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic small">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
			<div class="detailPic large">
				<img  src="public/assets/photo1.jpg" alt="">
			</div>
		</ul>
	</section>
	`)
