# Exercise 1: What is the Season?
def get_season_from_month(month):
    """Converts a month number (1-12) into a season."""
    if month in [12, 1, 2]:
        return "winter"
    elif month in [3, 4, 5]:
        return "spring"
    elif month in [6, 7, 8]:
        return "summer"
    elif month in [9, 10, 11]:
        return "autumn"