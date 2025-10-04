# edublocks_ext_greeter/__init__.py
def greet(name):
    """Returns a greeting string for the given name."""
    if not name:
        name = "World"
    return f"Hello, {name}!"