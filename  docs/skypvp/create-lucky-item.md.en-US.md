---
group: Quick Start
---

# Create a new lucky item

:::info{title=Information}
Lucky items are the items that drop after opening a lucky block. If a quality of lucky block has no items set, then nothing will drop after opening the lucky block.
:::

:::success{title=Tip}
You need the permission：SkyPvP.admin
:::

| Command                            | Description                               |
| ---------------------------------- | ----------------------------------------- |
| /LuckyItem add \<type> \<weight> | Set the item in your hand as a lucky item |
| /LuckyItem gui                     | LuckyItem gui Preview lucky items         |

## What is weight?

Weight is used to calculate the probability of an item being selected. Weight must be a positive integer, with a minimum of 0. The higher the weight, the higher the probability of being selected.

Note: Weight ≠ Percentage

## Create a new lucky item

There are two ways to add a lucky item, one is to use a command directly.The other is to click on create in the GUI.&#x20;

### Method one: Create directly using commands (recommended)

1. Hold the item you want to add
2. Use `/LuckyItem add <type> <weight>` command.
3. Complete the addition operation.

### Method two: Create from the GUI

1. Hold the item you want to add.
2. Open the GUI.
3. Click on the anvil at the bottom of the GUI to add the item.
4. Fill in the weight on the anvil page.
5. Complete the addition.

## Remove lucky items

There is only one way to remove lucky items, which can only be removed from the GUI.

1. Open GUI using the `/LuckyItem gui <type>` command.
2. Find the lucky item you want to remove.
3. Shift + right-click on this item.
4. Complete the removal.
