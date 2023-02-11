import React from 'react'

const Button = () => {



  return (



    <div>
      
      <div class="container">
	<div class="row">
		<h2>CSS3 3D Button Effects</h2> Text

		{/* <!-- Standard button --> */}
		<button type="button" class="btn3d btn btn-default btn-lg"><span class="glyphicon glyphicon-download-alt"></span> Default</button>

		<button type="button" class="btn3d btn btn-white btn-lg"><span class="glyphicon glyphicon-tag"></span> White</button>

		{/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
		<button type="button" class="btn btn-primary btn-lg btn3d"><span class="glyphicon glyphicon-cloud"></span> Primary</button>

		{/* <!-- Indicates a successful or positive action --> */}
		<button type="button" class="btn btn-success btn-lg btn3d"><span class="glyphicon glyphicon-ok"></span> Success</button>

		{/* <!-- Contextual button for informational alert messages --> */}
		<button type="button" class="btn btn-info btn-lg btn3d"><span class="glyphicon glyphicon-question-sign"></span> Info</button>

		{/* <!-- Indicates caution should be taken with this action --> */}
		<button type="button" class="btn btn-warning btn-lg btn3d"><span class="glyphicon glyphicon-warning-sign"></span> Warning</button>

		{/* <!-- Indicates a dangerous or potentially negative action --> */}
		<button type="button" class="btn btn-danger btn-lg btn3d"><span class="glyphicon glyphicon-remove"></span> Danger</button>

		<button type="button" class="btn btn-magick btn-lg btn3d"><span class="glyphicon glyphicon-gift"></span> Magick</button>

		<p>
			Text
			<button type="button" class="btn btn-primary btn-lg btn3d"><span class="glyphicon glyphicon-thumbs-up"></span></button>
      
			<button type="button" class="btn btn-danger btn-lg btn3d"><span class="glyphicon glyphicon-off"></span></button>
		</p>
		<p>
			Text
			<button type="button" class="btn btn-primary btn-lg btn3d">Large button</button>
			<button type="button" class="btn btn-default btn-lg btn3d">Large button</button>
		</p>
		<p>
			Text
			<button type="button" class="btn btn-primary btn3d">Default button</button>
			<button type="button" class="btn btn-default btn3d">Default button</button>
		</p>
		<p>
			Text
			<button type="button" class="btn btn-primary btn-sm btn3d">Small button</button>
			<button type="button" class="btn btn-default btn-sm btn3d">Small button</button>
		</p>
		<p>
			Text
			<button type="button" class="btn btn-primary btn-xs btn3d">Extra small button</button>
			<button type="button" class="btn btn-default btn-xs btn3d">Extra small button</button>
		</p>
	</div>
</div>




    </div>
  )
}

export default Button


