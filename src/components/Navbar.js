import React from 'react';
import Logo from "../images/Logo.png";

export default class Navbar extends React.Component {
	
    
    constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};

		this.toggleNavMenu = this.toggleNavMenu.bind(this);
	}

	toggleNavMenu() {
		this.setState({ isOpen: !this.state.isOpen });
	}

	render() {
		let menuIcon;

		if (this.state.isOpen) {
			menuIcon = (
				<path
					fill-rule="evenodd"
					d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
				/>
			);
		} else {
			menuIcon = (
				<path
					fill-rule="evenodd"
					d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
				/>
			);
		}  
    
    
    

		return (
			<header class="bg-atom sm:flex sm:justify-between sm:px-4  md:px-11 sm:py-1 sm:items-center sticky top-0 z-50 sm:w-full w-full">
				<header class="flex items-center justify-between px-4 py-3 sm:p-0 w-full">
					<div className=" w-40 place-content-center">
						<img  src={Logo} alt="Logo" />
					</div>

					<div class="lg:hidden">
						<button
							onClick={this.toggleNavMenu}
							type="button"
							className="text-white focus:text-white focus:outline-none px-4"
						>
							<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
								{menuIcon}
							</svg>
						</button>
					</div>
				</header>

				<div className={this.state.isOpen ? 'px-2 pt-2 pb-4 block' : 'px-2 pt-2 py-2 hidden lg:flex overflow:clip'}>
					<a
						href="#"
						class="mt-1 py-1 block text-white  px-7 sm:mt-0 sm:ml-2 font-Inter font-light"
					>
						HOME
					</a>
					<a
						href="#"
						class="mt-1 py-1 block text-white   px-7  sm:mt-0 sm:ml-2 font-Inter font-light"
					>
						PROGRAM
					</a>
					<a
						href="#"
						class="mt-1 py-1 block text-white px-7  sm:mt-0 sm:ml-2 font-Inter font-light"
					>
				    ATOMS
					</a>
                    <a
						href="#"
						class="mt-1 py-1 block text-white  px-7 sm:mt-0 sm:ml-2 font-Inter font-light"
					>
						STARTUPS
					</a>
                    <a
						href="#"
						class="mt-1 py-1 block text-white  px-7 sm:mt-0 sm:ml-2 font-Inter font-light"
					>
						BLOG
					</a>
                    <a
						href="#"
						class="mt-1 py-1 block text-white  px-7 sm:mt-0 sm:ml-2 font-Inter font-light"
					>
						PERKS
					</a>
                    <button 
                    href="#"
                    className="block text-white bg-eggplant rounded-md hover:bg-purple sm:mt-0 sm:ml-2 mx-1 my-1 px-7 py-2"
                    >
                        APPLY
                    </button>
				</div>
                
			</header>
		);
	}
}

