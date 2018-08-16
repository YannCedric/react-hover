# ReactJS Hover Component

React component to implement the CSS hover functionality... kinda

## Install and usage


1. `npm install react-hover-component`

2. Example usage 
   
``` jsx
import Hover from 'react-hover-component'

...

    render(){
        return (
            <Hover 
                style={{height: 100, 
                        width:100, 
                        backgroundColor: 'red',
                        transitionDuration: '1s'}}
                hover={{width:50}}>
                <div>
                    ...
                </div>
            </Hover> 
        )
    }

...
```

# Props

* **style** - OBJECT - object with styling properties. (Add the transitionDuration property to make the transition smoother). **PS** : The styles are applied to the child of the Hover component.
* **hover** - OBJECT - object with styling properties that will overite those in the base style property. No need to repeat styles declared in the style prop. Just provide the new styles to apply when hovering.