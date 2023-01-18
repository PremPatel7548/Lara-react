<html>
    <head>
        <style>
            .SignupForm{
    border-radius:20px;
}

 /* back Ground  */
 $pink: #ff1552;
$white: #fff;
$black: #000;

html{
	font-size: 100%;
  box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: inherit;
}

html, body{
  width: 100%;
  height: 100%;
}

body,
a,
button,
input{
	font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-weight: 400;
  font-size: 0.938rem;
  line-height: 1.15;
}
body{
  position: relative;
  background: url('https://image.ibb.co/jGk9RR/bg.jpg') no-repeat center fixed;
  background-size: 100% 100%;
  overflow-y: auto;

  @media screen and (min-width: 768px){
    min-height: 100%;
    height: auto;
    max-height: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow-y: visible;
	}
}
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
button{
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  &:active,
  &:hover {
	  outline: 0;
  }
}
a{
  text-decoration: none;
  cursor: pointer;
  &:active,
  &:hover {
	  outline: 0;
  }
}

.panel_blur,
.panel{
	width: 100%;
	height: 100%;
	overflow-y: auto;
	@media screen and (min-width: 768px){
		width: 350px;
		height: 500px;
		overflow-y: visible;
	}
}
/**
 * Blur
 */
.panel_blur{
	position: absolute;
	background: url('https://image.ibb.co/jGk9RR/bg.jpg') no-repeat center fixed;
	background-size: 100% 100%;
	filter: blur(5px);
}
/**
 * Panel
 */
.panel{
	position: relative;
	z-index: 1;
	&__register-form,
	&__password-form{ display: none; }
	&__register-form .form__submit{ margin-top: 5px !important; }
	&__form-wrapper{
		width: 100%;
		height: 100%;
		padding: 10%;
		background-color: rgba(0,0,0,0.5);
		overflow-y: auto;
		@media screen and (min-width: 768px){
			padding: 10% 15%;
			border-radius: 10px;
			overflow-y: visible;
		}
	}

	&__prev-btn{
		width:24px;
		height: 24px;
		background: none;
		padding: 0;
		svg{ transition: fill 0.3s; }
		&:hover > svg{ fill: $pink; }
	}

	&__headers{
		padding: 10px 0;
		text-align: center;
	}

	&__header{
		font-size: 1.375rem;
		&:first-child{ padding-bottom: 5px; }
		&.active > .panel__link{
			color: $pink;
			font-size: 3rem;
		}
	}

	&__link{
		color: inherit;
		transition: all 0.3s;
    font-weight: 600;
	}
}
/**
 * Styles for <form>
 */
.form{
	&__row{
		position: relative;
		padding-top: 40px;
		&.has-error > .form__error:after{
			display: block;
		}
	}
	&__input{
		width: 100%;
		padding: 5px 0;
		border: none;
		border-bottom: 1px solid rgba(255,255,255,0.5);
		background: none;
    &:focus, &:active{
      outline: 0;
    }
		&:focus ~ .form__label,
		&:active ~ .form__label,
		&:valid ~ .form__label{
			bottom: 30px;
			font-size: 0.75rem;
		}
		&:focus ~ .form__bar,
		&:active ~ .form__bar{
			left: 0;
			right: 0;
			width: 100%;
		}
	}
	&__bar{
		position: absolute;
		bottom: 0;
		left: 50%;
		right: 50%;
		display: block;
		width: 0;
		height: 2px;
		background-color: $pink;
		transition: all 0.3s;
	}
	&__label{
		position: absolute;
		bottom: 5px;
		left: 0;
		width: 100%;
		transition: all 0.3s;
		pointer-events: none;
	}
	&__submit{
		width: 100%;
		padding: 10px 0;
		margin-top: 30px;
    border: none;
		border-radius: 10px;
		font-weight: 600;
		background-color: $pink;
    cursor: pointer;
	}
	&__retrieve-pass{
		display: block;
		padding: 15px 0;
		text-align: center;
		color: rgba(255,255,255,0.5);
		transition: all 0.3s;
		&:hover{
			color: $white;
		}
	}

	&__error{
		position: absolute;
		bottom: -20px;
		display: block;
		width: 100%;
		height: 20px;
		color: $pink;
		font-size: 0.75rem;
		line-height: 20px;
		&:after{
			content: 'x';
			position: absolute;
			bottom: 20px;
			right: -20px;
			display: none;
			width: 20px;
			height: 25px;
			font-size: 1.125rem;
			line-height: 25px;
			text-align: center;
			color: $pink;
		}
	}
  &__info{
    text-align: center;
  }
}


/* Sign up Css */


            </style>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">

<link href="css/style.css" type="text/css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <link rel="stylesheet" href="/css/app.css">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          </head>
          <body>
              <div id="app"></div>
              <script src="/js/app.js"></script>
              <script src="https://unpkg.com/primereact/core/core.min.js"></script>
          </body>
</html>
