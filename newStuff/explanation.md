### Example Scenario

## Example 1 (Allowance)

Lets say you want to model 2 different kind of impacts, that Slippage can have on the Trading Volume.

    - If the Slippage grows over a treshold, each increase in slippage(+) leads to a negative impact - on Trading Volume[(+) -> -]
    - Additionally each decrease(-) in Slippage leads -> to a positive impact + on Trading Volume[(-) -> +]
    - Future: also add a lower bound to treshold

## Example 2 (Treshold)

What is also worth considering, if the network congestion reaches a treshold, each further grow leads to an increase in slippage

## Example 3 (Weight)

Assuming that, if the LP ROI reaches a certain level that is over the general market return, the increase in liquidity would double, we can add a "++" and the right treshold to the diagram.
