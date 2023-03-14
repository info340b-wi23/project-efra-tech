import React from 'react';


export default function RecipePages(props) {
  return (
    <main className='container'>
      <div className='my-5 px-2 text-center'>
        <h1>Baked Fish with Parmesan Breadcrumbs</h1>
      </div>
      <div className='recipe-top'>
        <span className='recipe-headnote-box p-3 row'>
          <p>This dish was passed down through our family for generations. Very easy to make and nutritious as well.</p>
        </span>
        <div className>
          <h4 className='pb-2'>Ingredients</h4>
          <div>
            <p>Butter (for the baking dish)</p>
            <p>Salt and pepper to taste</p>
            <p>6 sprigs parsley</p>
            <p>3 slices (1/4-inch thick) white sandwich bread, cut or torn into 1-inch pieces</p>
            <p>1 cup (2 1/2 ounces) shredded Parmesan cheese</p>
            <p>2 tablespoons unsalted butter, melted</p>
            <p>2 tablespoons olive oil</p>
            <p>2 1/2 pounds flounder fillets, or other mild fish</p>
            <p>1 to 2 lemons, cut into wedges (for garnish)</p>
          </div>
        </div>
        </div>
      <div className='mx-5 px-5 mt-5 recipe-steps mb-5 pb-5 text-left'>
        <h4 className='pb-2'>Steps</h4>
        <ol className='text-left'>
          <li>Preheat the oven to 425°F. Butter a large (9- by 13-inch) baking dish.</li>
          <li>Season the fish on both sides with salt and pepper. Lay them in the baking dish,
            overlapping them as necessary so the fillets all fit in the dish.</li>
          <li>Strip the leaves from the stems of parsley and add them to a food processor.
            (Discard or save the stems for another purpose.) Pulse the leaves until well chopped.
            Add the bread and pulse until it forms soft, coarse crumbs - you should have about 2 cups of
            coarse-ground
            breadcrumbs. Add the Parmesan cheese, and pulse to mix. Add the melted butter, olive oil, salt and
            pepper and
            pulse until mixed.(If using prepared breadcrumbs, just finely chop the parsley and toss with the
            breadcrumbs.
            You can also finely chop the Parmesan cheese, if you like, or just toss it with the breadcrumbs as
            is.)</li>
          <li>Spread the breadcrumbs evenly over the fish. Transfer to the oven and bake for 12 to 15 minutes, or
            until
            the center of the fish is opaque when probed with a small knife and the breadcrumbs are golden. If you
            have an
            instant read thermometer, the temperature of the center of the fish should register 135F. If the fish
            cooks
            before the topping browns, turn on the broiler and broil for about one minute. Watch carefully to keep
            the
            breadcrumbs from burning.</li>
          <li>With a sharp knife, cut the fish into portions. (You won't be able to serve one single fillet by
            itself,
            since they overlap in the pan and cook into one another.) Transfer to plates and serve with lemon
            wedges.</li>
        </ol>
      </div>
    </main>
  );
}

