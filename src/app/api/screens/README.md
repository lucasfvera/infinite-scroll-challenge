# Screens Routes

This is a new approach I'm trying where we can create super specific routes for our screens or views (components that show data).

By doing so, we decouple the backend models and structure from the requests and data we need in the client.

If at some point we need to change the structure or data we have for a particular screen (or endpoint), we can do it without worrying about the underlying models or resources in the backend.

The idea is to have **1 endpoint for 1 screen (or view)**.

You can read more about this approach from Dan Abramov's post [API for ViewModels](https://overreacted.io/jsx-over-the-wire/#api-for-viewmodels) in his blog.