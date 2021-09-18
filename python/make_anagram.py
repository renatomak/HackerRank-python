# Two words are anagrams when both strings contain exactly 
# the same letters at the exact same frequency.
# inputs: two strings
# Constraints: The strings  and  consist of lowercase 
# English alphabetic letters, ascii[a-z].
# return: int: the minimum total characters that must be deleted

def make_anagram(a, b):
    setA = set(a)
    setB = set(b)
    print(setA)
    print(setB)
    return 0



result = make_anagram('aaaabbbbccc', 'aabcc')
print(result)