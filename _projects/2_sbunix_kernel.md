---
layout: page
title: SBUnix - 64-bit Operating System Kernel
description: A complete 64-bit Unix-like operating system kernel built from scratch
img: assets/img/3.jpg
importance: 2
category: personal
github: https://github.com/sshindesiddesh/SBUnix
---

## Overview

SBUnix is a complete 64-bit Unix-like operating system kernel that I developed from scratch as part of my graduate studies at Stony Brook University. This project demonstrates deep understanding of operating system concepts, low-level programming, and system architecture.

## Key Features

### Core Kernel Components
- **Boot Loader**: Custom GRUB-compatible boot loader for x86_64 architecture
- **Memory Management**: Complete virtual memory system with paging and segmentation
- **Process Management**: Process creation, scheduling, and inter-process communication
- **File System**: Basic file system implementation with directory structure support
- **Device Drivers**: Keyboard, VGA display, and timer drivers

### System Calls
Implemented essential Unix system calls including:
- Process control: `fork()`, `exec()`, `wait()`, `exit()`
- File operations: `open()`, `read()`, `write()`, `close()`
- Memory management: `brk()`, `mmap()`
- I/O operations: `pipe()`, `dup()`

### Advanced Features
- **Multi-tasking**: Preemptive multitasking with round-robin scheduling
- **Virtual Memory**: Demand paging with copy-on-write optimization
- **Shell**: Basic command-line interface with built-in commands
- **ELF Loader**: Support for loading and executing ELF binaries

## Technical Implementation

### Architecture
- **Target Platform**: x86_64 (64-bit)
- **Programming Language**: C and Assembly
- **Build System**: Custom Makefile with cross-compilation support
- **Testing**: QEMU-based testing environment

### Memory Management
- Implemented page tables and virtual address translation
- Physical memory allocator with buddy system
- Kernel heap management
- User space memory protection

### Process Scheduling
- Round-robin scheduler with time slicing
- Process control blocks (PCB) management
- Context switching implementation
- Signal handling mechanism

## Challenges Overcome

1. **Low-level Programming**: Working directly with hardware registers and assembly language
2. **Memory Protection**: Implementing proper isolation between kernel and user space
3. **Interrupt Handling**: Managing hardware interrupts and system calls
4. **Debugging**: Debugging kernel code without traditional debugging tools

## Learning Outcomes

This project provided hands-on experience with:
- Operating system internals and design principles
- Low-level system programming and hardware interaction
- Memory management and virtual memory systems
- Process scheduling and synchronization
- File system design and implementation

## Repository

The complete source code is available on [GitHub](https://github.com/sshindesiddesh/SBUnix) with detailed documentation and build instructions.
