Simple component displaying a list of item and allowing selection of the initial scroll position
(as an index of the item list)

Props
-----

 * `offset`: number of the item to scroll the component to (0-based)
 * `elementHeight`: height per item (currently only supports all items of same height)

This will only scroll if the component is sufficiently constrained in height.
If offset is pointing to last item in the list then we'll scroll to the bottom of the list, but we won't add some blank space to put that item to the top.
