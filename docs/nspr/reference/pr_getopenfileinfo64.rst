PR_GetOpenFileInfo64
====================

Gets an open file's information. File size is expressed as a 64-bit
integer.


Syntax
------

.. code::

   #include <prio.h>

   PRStatus PR_GetOpenFileInfo64(
     PRFileDesc *fd,
     PRFileInfo *info);


Parameters
~~~~~~~~~~

The function has the following parameters:

``fd``
   A pointer to a :ref:`PRFileDesc` object for an open file.
``info``
   A pointer to a :ref:`PRFileInfo64` object. On output, information about
   the given file is written into the file information object.


Returns
~~~~~~~

The function returns one of the following values:

-  If file information is successfully obtained, ``PR_SUCCESS``.
-  If file information is not successfully obtained, ``PR_FAILURE``.


Description
-----------

:ref:`PR_GetOpenFileInfo64` is the 64-bit version of
:ref:`PR_GetOpenFileInfo`. It obtains the file type (normal file,
directory, or other), file size (as a 64-bit integer), and the creation
and modification times of the open file represented by the file
descriptor.


See Also
--------

For the 32-bit version of this function, see :ref:`PR_GetOpenFileInfo`. To
get equivalent information on a file that's not already open, use
:ref:`PR_GetFileInfo64`.
