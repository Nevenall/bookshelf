[![Build Status](https://travis-ci.org/Nevenall/BookShelf.svg?branch=master)](https://travis-ci.org/Nevenall/BookShelf)

# BookShelf

BookShelf is a [progressive web app](https://developers.google.com/web/progressive-web-apps/) for serving up notes, documentation, or books as static html fragments. 

## Why?

I do my writing in markdown, using markdown-it with some custom extensions to convert it to html, and none of the existing static html services supported my custom extensions, nor offered a good experience regardless of device, so I made my own.

As a progressive web app, BookShelf, gets sent to your browser as a self contained package. Once you've loaded it, you no longer need network connectivity to read any of the pages. Also, some smartphones allow installing a progressive web app as if it was a phone app.

## Running Instances

To see a live instance check out one of these:

- [Ghosting the Edge](https://ghosting.bookshelf.press)
- [Sufficient Reason](https://sufficientreason.bookshelf.press)

## Usage 

Just fork the repository and add your own html fragements to the `src/pages` directory. 

Delete or edit `firebase.json` and `.travis.yml` to fit your own CI/Hosting needs. 

Style your application however you want. 

## What You Get

### Navigation

Bookshelf will generate a nested navigation for your pages based on their directory structure.

*Currently only one level of directory structure is supported.*

### Page Position Memory

Bookshelf will remember where you are on a page on a particular device.

### Material Design

The application uses `Vue Material` and adheres to the Material Design guidelines.
