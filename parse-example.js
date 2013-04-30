Parse.initialize("LLHx2XYQ6XLq1ZZj8YEP0iqorXoKtORMIixYEKNt", "Gz8k5NT2CsV19kAxWFKy5mBxjmsq8QnVmIS5JPUE");
 
$(document).ready(function(){
 
  $('.save-recipe').click(function(){

    fetchedRecipe.set('name', $('.recipe-name').val() )

    fetchedRecipe.save(null, {
      success: function(object) {
        console.log('saved your recipe! awesome!');
      },
      error: function(object, error) {
        console.log('ERROR! Try again')
      }
    })
  })  

   $('.retrieve-recipe-name').click(function(){
    var attributes = {};
    attributes.name = $('.retrieve-recipe-name').val();

    var Recipe = Parse.Object.extend('Recipe')
    var query = new Parse.Query(Recipe);
    
    var ids = ['ODF6tjaX33', 'y6GGRoe3Eh', 'vm57G2VXoJ', 'G27W69nMMC', '1hBOW2g0PG']
    
    for(var i=0; i<ids.length; i++) {
    var value = ids[i];

      query.get(value, {
        success: function(object) {
          console.log('retrieved recipe!');
          console.log(object.get('name'));
          window.fetchedRecipe = object;

          $('.recipe-name').val(fetchedRecipe.get('name'))
          $('.recipe-description').val(fetchedRecipe.get('description'))

        },
        error: function(object, error) {
          console.log('ERROR! Try again')
        }
      })
    }  
  })  



//     var recipeName = Recipe.get('name')
//       success: function(recipeName) {
//         console.log('retrieved recipe!')
//       },
//       error: function(Recipe, error) {
//         console.log('ERROR! Try again')
//       }
//     var recipeDescription = Recipe.get('description') 

//     var query = new Parse.Query('Recipe');
//     query.get('ODF6tjaX33', {
//       success: function(recipeName) {
//         console.log('retrieved recipe!')
//       },
//       error: function(Recipe, error) {
//         console.log('ERROR! Try again')
//       }
//     }
 

//   })
})

