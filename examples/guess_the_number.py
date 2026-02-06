"""
Guess the Number - A simple terminal game.
The game picks a random integer between 1 and 10 and asks the user to guess.
"""

import random

def main():
    secret = random.randint(1, 10)

    while True:
        try:
            guess = int(input("Guess a number between 1 and 10: "))
        except ValueError:
            print("Please enter a valid integer.")
            continue

        if guess < secret:
            print("Wrong guess! Too Low!")
        elif guess > secret:
            print("Wrong guess! Too High!")
        else:
            print("Correct! Good job!")
            break

if __name__ == "__main__":
    main()
