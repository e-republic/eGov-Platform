import os
from typing import Type, Optional, Any

from .exceptions import ImproperlyConfigured


class _NoneType:
    __slots__ = ()

_None = _NoneType()


def env(name: str, cast: Type = str, default: Optional[Any] = _None) -> Any:
    """
    Returns environment variable
    :param name: Name of the environment variable
    :param cast: type to cast the value
    :param default: default value, if it isn't present in environment variables
    :param log: if True, `name: value` pair pushes to the `options_dict`
    :raise ImproperlyConfigured if required variable is not set
    """
    try:
        _value = os.environ[name]
        if cast is bool:
            value = bool(int(_value))
        else:
            value = cast(_value)
    except KeyError:
        if default is _None:
            raise ImproperlyConfigured(
                "`{}` environment variable is required!"
                .format(name)
            )
        else:
            value = default
            
    return value
