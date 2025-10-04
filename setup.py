# Example setup.py
from setuptools import setup

setup(
    name='edublocks-ext-greeter',  # The name for pip install
    version='0.1',
    description='A simple greeter extension for Edublocks',
    url='https://github.com/YOUR_USERNAME/ext-template', # Link to your repo
    author='YOUR_NAME',
    author_email='your.email@example.com',
    license='MIT',
    packages=['edublocks_ext_greeter'], # Use the new folder name here
    zip_safe=False
)