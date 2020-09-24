// User sees interesting list like feature --accordion--


const toggleButtons = document.getElementsByClassName('toggleAccordion');

// User clicks on list item

// List item expands

// Along with the expanding list item is an expanding circle

// User clicks list item again and it closes

// circle also contracts Along with the list item

// -- end of new user start --

// -- start of old code --

// Behaviour: expand on click, display more content

/** Get the element to be clicked on,
connent the element with a javascript function,
perform the  function until you're done **/

// const expand = i.addEventListener('click', displayAccordion());

/*
const displayAccordion = () => {

  // Gets the element class name
  let toggleButtons = document.getElementsByClassName("toggleAccordion"); // this feels like it should appear outside the function
  // console.log("length: ", toggleButtons.length);
  for (const element in toggleButtons) {
    // console.log(element);

  }
  for (i = 0; i < toggleButtons.length; i++) {

    // Displaying the button with a click event
    toggleButtons[i].addEventListener("click", function() {
      this.classList.toggle("active");
      console.log();

      // Managing the next element
      let accordionContent = this.nextElementSibling;
      console.log(accordionContent);

      if (accordionContent.style.display === "block") {
        accordionContent.style.display == "none";
      } else {
        accordionContent.style.display = "block";
      }
    });
  }

}

console.log(displayAccordion());


*/



  // Expand the accordions
  // div, button
  // click on the button


  // display content
  // close content



// import React from 'react';
// import PropTypes from 'prop-types';

// /**
//  * Accordion for the Services Diagram
//  *
//  * @param {object} props
//  * @returns {component}
//  */
// const SDAccordion = props => {
//   const {
//     handleChange,
//     expanded,
//     stateToToggle,
//     link,
//     linkText,
//     title,
//     content,
//   } = props;
//   const active = expanded ? '--active' : '';

//   return (
//     <div>
//       {/* eslint-disable-next-line jsx-a11y/aria-proptypes */}
//       <button
//         onClick={() => handleChange(stateToToggle, expanded)}
//         aria-expanded={expanded}
//         className={`sd__accordion-toggle ${active}`}
//         type="button"
//       >
//         <h4>{title}</h4>
//       </button>

//       <div className={`sd__accordion-content ${active}`}>
//         <h2 className="mix-txt_lower" aria-hidden={!expanded}>{content}</h2>
//         <a
//           aria-hidden={!expanded}
//           tabIndex={`${expanded ? 0 : -1}`}
//           href={link}
//           className="btn --sd-btn"
//         >
//           {linkText}
//         </a>
//       </div>
//     </div>
//   );
// };

// SDAccordion.propTypes = {
//   expanded: PropTypes.bool,
//   handleChange: PropTypes.func,
//   content: PropTypes.string,
//   link: PropTypes.string,
//   linkText: PropTypes.string,
//   title: PropTypes.string,
//   stateToToggle: PropTypes.string,
// };

// export default SDAccordion;
