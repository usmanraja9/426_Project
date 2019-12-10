
// export const createGrid = function(month, dates, start, year) {
//     // TODO: Generate HTML elements to represent the hero
//     if(dates == 31){
//         if(start == "Monday"){
//             return `<table>
//     <thead>
//     <tr>
//         <th>${month}</th>
//         <th></th>
//         <th></th>
//         <th></th>
//         <th>${year}</th>
//     </tr>
//     </thead>
//     <tbody>
//     <tr>
//         <td>Monday</td>
//         <td>Tuesday</td>
//         <td>Wednesday</td>
//         <td>Thursday</td>
//         <td>Friday</td>
//         <td>Saturday</td>
//         <td>Sunday</td>
//     </tr>
//     <tr>
//         <td>1</td>
//         <td>2</td>
//         <td>3</td>
//         <td>4</td>
//         <td>5</td>
//         <td>6</td>
//         <td>7</td>
//     </tr>
//     <tr>
//         <td>8</td>
//         <td>9</td>
//         <td>10</td>
//         <td>11</td>
//         <td>12</td>
//         <td>13</td>
//         <td>14</td>
//     </tr>
//     <tr>
//         <td>15</td>
//         <td>16</td>
//         <td>17</td>
//         <td>18</td>
//         <td>19</td>
//         <td>20</td>
//         <td>21</td>
//     </tr>
//     <tr>
//         <td>22</td>
//         <td>23</td>
//         <td>24</td>
//         <td>25</td>
//         <td>26</td>
//         <td>27</td>
//         <td>28</td>
//     </tr>
//     <tr>
//         <td>29</td>
//         <td>30</td>
//         <td>31</td>
//         <td></1td>
//         <td></td>
//         <td></td>
//         <td></td>
//     </tr>
//     </tbody>
//     </table>`
//         }
//         else if(start == "Wednesday"){
//             return `<table>
//     <thead>
//     <tr>
//         <th>${month}</th>
//         <th></th>
//         <th></th>
//         <th></th>
//         <th>${year}</th>
//     </tr>
//     </thead>
//     <tbody>
//     <tr>
//         <td>Monday</td>
//         <td>Tuesday</td>
//         <td>Wednesday</td>
//         <td>Thursday</td>
//         <td>Friday</td>
//         <td>Saturday</td>
//         <td>Sunday</td>
//     </tr>
//     <tr>
//         <td></td>
//         <td></td>
//         <td>1</td>
//         <td>2</td>
//         <td>3</td>
//         <td>4</td>
//         <td>5</td>
//     </tr>
//     <tr>
//         <td>6</td>
//         <td>7</td>
//         <td>8</td>
//         <td>9</td>
//         <td>10</td>
//         <td>11</td>
//         <td>12</td>
//     </tr>
//     <tr>
//         <td>13</td>
//         <td>14</td>
//         <td>15</td>
//         <td>16</td>
//         <td>17</td>
//         <td>18</td>
//         <td>19</td>
//     </tr>
//     <tr>
//         <td>20</td>
//         <td>21</td>
//         <td>22</td>
//         <td>23</td>
//         <td>24</td>
//         <td>25</td>
//         <td>26</td>
//     </tr>
//     <tr>
//         <td>27</td>
//         <td>28</td>
//         <td>29</td>
//         <td>30</1td>
//         <td>31</td>
//         <td></td>
//         <td></td>
//     </tr>
//     </tbody>
//     </table>`
//         }

//     }
//     else if(dates == 30){
//         if(start == "Wednesday"){
//             return `<table>
//     <thead>
//     <tr>
//         <th>${month}</th>
//         <th></th>
//         <th></th>
//         <th></th>
//         <th>${year}</th>
//     </tr>
//     </thead>
//     <tbody>
//     <tr>
//         <td>Monday</td>
//         <td>Tuesday</td>
//         <td>Wednesday</td>
//         <td>Thursday</td>
//         <td>Friday</td>
//         <td>Saturday</td>
//         <td>Sunday</td>
//     </tr>
//     <tr>
//         <td></td>
//         <td></td>
//         <td>1</td>
//         <td>2</td>
//         <td>3</td>
//         <td>4</td>
//         <td>5</td>
//     </tr>
//     <tr>
//         <td>6</td>
//         <td>7</td>
//         <td>8</td>
//         <td>9</td>
//         <td>10</td>
//         <td>11</td>
//         <td>12</td>
//     </tr>
//     <tr>
//         <td>13</td>
//         <td>14</td>
//         <td>15</td>
//         <td>16</td>
//         <td>17</td>
//         <td>18</td>
//         <td>19</td>
//     </tr>
//     <tr>
//         <td>20</td>
//         <td>21</td>
//         <td>22</td>
//         <td>23</td>
//         <td>24</td>
//         <td>25</td>
//         <td>26</td>
//     </tr>
//     <tr>
//         <td>27</td>
//         <td>28</td>
//         <td>29</td>
//         <td>30</1td>
//         <td></td>
//         <td></td>
//         <td></td>
//     </tr>
//     </tbody>
//     </table>`
//         }
//     }
// };



// /**
//  * Given a hero object, this function generates a <form> which allows the
//  *     user to edit the fields of the hero. The form inputs should be
//  *     pre-populated with the initial values of the hero.
//  * @param hero  The hero object to edit (see data.js)
//  */
// export const getDates = function(month, leapYear) {
//     if(month == "February"){
//         if(leapYear == true){
//             return 29;
//         }
//         else{ return 28}
//     }
//     else if(month == "April" || month == "June" || month == "September" || month == "November"){
//         return 30;
//     }
//     else{
//         return 31;
//     }
// };



// /**
//  * Given an array of hero objects, this function converts the data into HTML and
//  *     loads it into the DOM.
//  * @param heroes  An array of hero objects to load (see data.js)
//  */
// export const createCal = function(heroes) {
//     // Grab a jQuery reference to the root HTML element
//     const $root = $('#root');
//     let month = "December";
//     let year = 2019;
//     let day = "Sunday";
//     let date = "8";

//     let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     let dayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//     let dates = getDates("January");
//     $root.replaceWith(createGrid("January", dates, "Wednesday", 2020));
// };

function createCal() {
    const $root = $('#root');
    let calendar = `
    <div class="month">
        <p> Hello </p>
    </div>`

    root.append(calendar);
};

/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function () {
    createCal();
});