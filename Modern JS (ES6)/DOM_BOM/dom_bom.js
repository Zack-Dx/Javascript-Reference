// Section 10👉 Document Object model in JavaScript

//  1️⃣ Window is the main container or we can say the
//  global Object and any operations related to entire
//   browser window can be a part of window object.  -->
//   <!-- For ex 👉 the history or to find the url etc. -->
//    <!-- 1️⃣ whereas the DOM is the child of Window Object -->

//  <!-- 2️⃣ All the members like objects, methods or properties.
//  If they are the part of window object then we do not refer
//  the window object. Since window is the global object
//  so you do not have to write down window.
//  - it will be figured out by the runtime. -->

// <!--
//  For example
//  👉 window.screen or just screen is a small information
//  object about physical screen dimensions.
//  👉 window.location giving the current URL
//  👉 window.document or just document is the main object
//  of the potentially visible (or better yet: rendered)
//  document object model/DOM -->

//   <!-- ************** DOM vs BOM ******************* -->

//  <!-- 👉 The DOM is the Document Object Model, which deals with the document,
//  the HTML elements themselves, e.g. document and all traversal you
//  would do in it, events, etc.

//  For Ex: 👨‍🏫
//  change the background color to red
//  document.body.style.background = "red";

//  👉 The BOM is the Browser Object Model, which deals with browser components
//  aside from the document, like history, location, navigator and screen
//  (as well as some others that vary by browser). OR
//  In simple meaning all the Window operations which comes under BOM are performed
//   -->
// <!--
//  Let's see more practical on History object

//  Functions alert/confirm/prompt are also a part of BOM:
//  they are directly not related to the document,
//  but represent pure browser methods of communicating with the user. -->

//  <!-- alert(location.href); shows current URL
// if (confirm("Want to Visit Zack's Channel?")) {
//        location.href = "https://www.youtube.com/"; // redirect the browser to another URL
//  } -->

//   <!-- How to check whether an element has child nodes or not?
//   we will use hasChildNodes()
