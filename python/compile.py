#pip install Cython
from distutils.core import setup
from distutils.extension import Extension
from Cython.Distutils import build_ext
from Cython.Build import cythonize


ext_modules = [
    Extension("test", ["test.py"]),
]

setup(
    name='Test Compile',
    cmdclass={'build_ext': build_ext},
    ext_modules=cythonize(ext_modules,
                          compiler_directives={'always_allow_keywords': True}, # 'always_allow_keywords' for avoid flask error
                          )

)
# than call
# add a main.py where flask app is call and run main.py