var activeDivsinitiative = [];
var activeDivslanguage = [];
var activeDivstopic = [];

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if (e.style.display === 'block') {
        e.style.display = 'none';
    } else {
        e.style.display = 'block';
    }
}

$('.toggleFilters').click(function () {
    $('#filters').slideToggle('2000', "swing", function () {
        // Animation complete.
    });
});

/**
 * This function will get the active filters (through the checkboxes), and if active append the id of the selected div to the global lists. After filling the lists with the active filters, several cycles will parse those lists to display or hide such divs with contents.
 * @param {callback} callback of the function that trigerred this function - onClick of checkboxes
 * @author Rui Costa
 */
function toggle_filters(callback) {
    // Phase 1: get the id of the activated checkbox and append to global list
    var filter = $(callback).attr('data-filter');
    if (filter == "initiative") {
        // Getting ID for initiatives filter
        var id = $(callback).attr('id');
        var selectDiv = id + "-div";
        /* if its not on the active list and it's checked -> add to active list*/
        if (activeDivsinitiative.indexOf(selectDiv) < 1 && document.getElementById(id).checked) {
            activeDivsinitiative.push(selectDiv);
        }
        /* if its on the active list but its unchecked -> remove from list */
        if (!document.getElementById(id).checked) {
            for (var i = 0; i < activeDivsinitiative.length; i++) {
                if (activeDivsinitiative[i] == selectDiv) {
                    activeDivsinitiative.splice(i, 1);
                }
            }
        }
    }
    if (filter == "language") {
         // Getting ID for language filter
        var id = $(callback).attr('id');
        var selectDiv = id + "-div";
        /* if its not on the active list and it's checked -> add to active list*/
        if (activeDivslanguage.indexOf(selectDiv) < 1 && document.getElementById(id).checked) {
            activeDivslanguage.push(selectDiv);
        }
        /* if its on the active list but its unchecked -> remove from list */
        if (!document.getElementById(id).checked) {
            for (var i = 0; i < activeDivslanguage.length; i++) {
                if (activeDivslanguage[i] == selectDiv) {
                    activeDivslanguage.splice(i, 1);
                }
            }
        }
    }

    if (filter == "topic") {
         // Getting ID for topic filter
        var id = $(callback).attr('id');
        var selectDiv = id + "-div";
        /* if its not on the active list and it's checked -> add to active list*/
        if (activeDivstopic.indexOf(selectDiv) < 1 && document.getElementById(id).checked) {
            activeDivstopic.push(selectDiv);
        }
        /* if its on the active list but its unchecked -> remove from list */
        if (!document.getElementById(id).checked) {
            for (var i = 0; i < activeDivstopic.length; i++) {
                if (activeDivstopic[i] == selectDiv) {
                    activeDivstopic.splice(i, 1);
                }
            }
        }
    }
    
    // Phase 2: Will parse the global lists and Display:Block or Display:None if present on those lists.
    if (activeDivsinitiative.length < 1) {
        // Toggling initiatives divs.
        // If the list is empty, all the divs should be visible because no filter is applied.
        var initiativeElements = getAllElementsWithAttribute('data-initiative');
        for (var i = 0; i < initiativeElements.length; i++) {
            initiativeElements[i].style.display = 'block';
        }
    } else {
        // Will show only the divs that are on selected by the checkboxes and hide the rest.
        var initiativeElements = getAllElementsWithAttribute('data-initiative');
        for (var i = 0; i < initiativeElements.length; i++) {
            var elementName = initiativeElements[i].getAttribute("data-initiative");
            if (activeDivsinitiative.indexOf(elementName) >= 0) {
                initiativeElements[i].style.display = 'block';
            } else {
                initiativeElements[i].style.display = 'none';
            }
        }
    }

    // If the lists (both language and topic) are empty, all the divs should be visible because no filter is applied.
    if (activeDivslanguage.length < 1 && activeDivstopic.length < 1) {
        var languageElements = getAllElementsWithAttribute('data-language');
        for (var i = 0; i < languageElements.length; i++) {
            languageElements[i].style.display = 'block';
        }

    // If the language filter is active
    } else if (activeDivslanguage.length >= 1) {
        // Will show only the divs that are on selected by the checkboxes and hide the rest.
        var languageElements = getAllElementsWithAttribute('data-language');
        for (var i = 0; i < languageElements.length; i++) {
            var elementName = languageElements[i].getAttribute("data-language");
            if (activeDivslanguage.indexOf(elementName) >= 0) {
                languageElements[i].style.display = 'block';
            } else {
                languageElements[i].style.display = 'none';
            }
        }
    }
    
     // If the topic filter is active
    else if (activeDivstopic.length >= 1) {
        // Will show only the divs that are on selected by the checkboxes and hide the rest.
        var topicElements = getAllElementsWithAttribute('data-topic');
        for (var i = 0; i < topicElements.length; i++) {
            var elementName = topicElements[i].getAttribute("data-topic");
            if (activeDivstopic.indexOf(elementName) >= 0) {
                topicElements[i].style.display = 'block';
            } else {
                topicElements[i].style.display = 'none';
            }
        }
    }

     // If both filters (topic and language) are active.  
     if (activeDivstopic.length >= 1 && activeDivslanguage.length >= 1) {
        var topicElements = getAllElementsWithAttribute('data-topic');
        var languageElement = getAllElementsWithAttribute('data-language');
        for (var i = 0; i < topicElements.length; i++) {
            var elementNameTopic = topicElements[i].getAttribute("data-topic");
            if (activeDivstopic.indexOf(elementNameTopic) >= 0 && activeDivslanguage.indexOf(elementNameLang) >= 0) {
                topicElements[i].style.display = 'block';
            } 
            else {
                topicElements[i].style.display = 'none';
            }
        }
    }
}


/**
 * Get all elements with specific attribute. Usefull for data-* user-defined attributes
 * @param {string} attribute name
 * @return Array with all elements that have defined the attribute received as param
 * @author Rui Costa
 */
function getAllElementsWithAttribute(attribute) {
    var elementsWithAttribute = [];
    var allElements = document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].getAttribute(attribute)) {
            // Element exists with attribute. Add to array.
            elementsWithAttribute.push(allElements[i]);
        }
    }
    return elementsWithAttribute;
}


