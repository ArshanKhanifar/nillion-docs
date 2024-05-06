# Arithmetic and Logic

Nada programs can work with common arithmetic and logic values (such as integers and booleans) and operations (such as addition and conditional expressions).

## Integers

The example below computes the revenue generated from the sales of two categories of product. In this example, all inputs are of type `SecretInteger`, so the result `revenue` is also of this type.

<iframe src='img/nada-lang-tutorial-arithmetic-and-logic-0.html' height='350px' width='100%'></iframe>
<!--```python
from nada_dsl import *

def nada_main():
    pricing = Party(name="pricing")
    inventory = Party(name="inventory")
    accounting = Party(name="accounting")

    price_potato = SecretInteger(Input(name="price_potato", party=pricing))
    price_tomato = SecretInteger(Input(name="price_tomato", party=pricing))

    quantity_potato = SecretInteger(Input(name="quantity_potato", party=inventory))
    quantity_tomato = SecretInteger(Input(name="quantity_tomato", party=inventory))

    revenue = (price_potato * quantity_potato) + (price_tomato + quantity_tomato)

    return [Output(revenue, "revenue", accounting)]
```-->

Suppose that the price information is public. In this case, `revenue` is still of type `SecretInteger` because the quantity information is private. If `revenue` were of type `PublicInteger`, it would (in some cases) be possible to determine the quantity information from the revenue by working backwards.

<iframe src='img/nada-lang-tutorial-arithmetic-and-logic-1.html' height='350px' width='100%'></iframe>
<!--```python
from nada_dsl import *

def nada_main():
    pricing = Party(name="pricing")
    inventory = Party(name="inventory")
    accounting = Party(name="accounting")

    price_potato = PublicInteger(Input(name="price_potato", party=pricing))
    price_tomato = PublicInteger(Input(name="price_tomato", party=pricing))

    quantity_potato = SecretInteger(Input(name="quantity_potato", party=inventory))
    quantity_tomato = SecretInteger(Input(name="quantity_tomato", party=inventory))

    revenue = (price_potato * quantity_potato) + (price_tomato + quantity_tomato)

    return [Output(revenue, "revenue", accounting)]
```-->

What about integer values that appear in the program as literals (*i.e.*, they are not secret or public inputs) but are used within calculations involving inputs? These should be of type `Integer`.

<iframe src='img/nada-lang-tutorial-arithmetic-and-logic-2.html' height='300px' width='100%'></iframe>
<!--```python
from nada_dsl import *

def nada_main():
    pricing = Party(name="pricing")
    inventory = Party(name="inventory")
    accounting = Party(name="accounting")

    price = PublicInteger(Input(name="price", party=pricing))
    quantity = SecretInteger(Input(name="quantity", party=inventory))

    revenue_in_cents = Integer(100) * price * quantity

    return [Output(revenue_in_cents, "revenue_in_cents", accounting)]
```-->

## Boolean Values and Comparison of Integers

Comparison operations can be applied to Nada integers. Whether the resulting value is secret depends on whether the input values are secret.

<iframe src='img/nada-lang-tutorial-arithmetic-and-logic-3.html' height='296px' width='100%'></iframe>
<!--```python
from nada_dsl import *

def nada_main():
    data_owner = Party(name="data_owner")

    x = SecretInteger(Input(name="x", party=data_owner))
    y = SecretInteger(Input(name="y", party=data_owner))
    z = PublicInteger(Input(name="z", party=data_owner))

    a = x < y
    b = x == z

    return [Output(x, "x", data_owner), Output(y, "y", data_owner)]
```-->

## Built-in Python Constants and Operations

Because Nada is a DSL embedded inside Python, built-in constants of type `int` and `bool` (and the operators associated with these types) can be used directly. However, it is important to understand that these cannot be used interchangeably or mixed. The example below demonstrates both correct and incorrect usage of built-in and Nada values.

<iframe src='img/nada-lang-tutorial-arithmetic-and-logic-4.html' height='350px' width='100%'></iframe>
<!--```python
from nada_dsl import *

def nada_main():
    data_owner = Party(name="data_owner")

    x = SecretInteger(Input(name="x", party=data_owner))

    # Permitted.
    a = x + Integer(123) + Integer(456)
    b = x + Integer(123 + 456)

    # Not permitted.
    c = x + 123 + 456
    d = x + 123

    return [Output(a, "a", data_owner), Output(b, "b", data_owner)]
```-->